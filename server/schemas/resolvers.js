const { AuthenticationError } = require('apollo-server-express');
const { User, Goal } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (parent, { _id }) => {
            return await User.findById(_id).populate('goal');
        },
        goals: async () => {
            return await Goals.find();
        },
        goals: async (parent, { _id }) => {
            return await Goal.findById(_id).populate('user');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

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