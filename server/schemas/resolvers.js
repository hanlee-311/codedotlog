const { AuthenticationError } = require('apollo-server-express');
const { User, Goal } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (parent, { _id }) => {
            return await User.findById(_id).populate('goal');
        },
        goal: async () => {
            return await Goals.find();
        },
        goals: async (parent, { _id }) => {
            return await Goal.findById(_id).populate('user');
        },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
        
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
        
            const correctPw = await user.isCorrectPassword(password);
        
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
        
            const token = signToken(user);
        
            return { token, user };
          },
        addUser: async (parent, args) => {
            console.log("Args for user:", args);
            const user = await User.create(args);
            console.log("user:", user);
            const token = signToken(user);
            console.log("token:", token);


            return { token, user };
        },
        addGoal: async (parent, args) => {
            const goal = await Goal.create(args);
            const token = signToken(goal);

            return { token, goal };
        },
    }
};

module.exports = resolvers;