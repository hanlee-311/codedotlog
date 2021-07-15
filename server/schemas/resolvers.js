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
            return await User.findById(_id)
            // .populate('goal');
        },
        // goal: async () => {
        //     return await Goals.find();
        // },
        // goals: async (parent, { _id }) => {
        //     return await Goal.findById(_id).populate('user');
        // },
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
            const user = await User.create(args);
            const token = signToken(user);
            console.log("token:", token);

            return { token, user };
        },
        addGoal: async (parent, args) => {
            console.log(args);
           const user = await User.findById(args._id)
           user.goals.push({
               language: args.language,
               goalHours: args.goalHours,
           });
           await user.save();
           return user;
        }
        // updateGoal: async (parent, args) => {
        //     const userProgress = await User.findById(args._id);
        //     console.log(userProgress.goals);
        //     var goalIndex = userProgress.goals.findIndex(item => item._id == args.goalId);
        //     // var goalIndex = userProgress.goals.map(item => item._id).indexOf(args.goalId);
        //     console.log(item._id, args.goalId);
        //     console.log(goalIndex);
        //     userProgress.goals[goalIndex].progressHours = userProgress.goals[goalIndex].progressHours + args.progressHours;
        //     await userProgress.save();
        //     return userProgress;
        // }
    }
};

module.exports = resolvers;