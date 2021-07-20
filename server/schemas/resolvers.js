const { AuthenticationError } = require('apollo-server-express');
const { User, Goal } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const mongoose = require('mongoose');
const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, { _id }) => {
      return await User.findById(_id)
      // .populate('goal');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      console.log(user);

      if (!user) {
        throw new AuthenticationError('Incorrect user');
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log("Password? " + correctPw)

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
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
    addGoal: async (parent, args, context) => {
      console.log("AddGoal Hit");
      const user = await User.findOne({ _id: context.user._id })
      user.goals.push({
        language: args.language,
        goalHours: args.goalHours,
      });
      await user.save();
      return user;
    },
    updateGoal: async (parent, args, context) => {
      const userProgress = await User.findOne({ _id: context.user._id })
      const currentGoal = userProgress.goals.find(goal => {
        console.log(goal._id, mongoose.Types.ObjectId(args.goalId), goal._id == args.goalId)
        return goal._id == args.goalId
      });
      await User.update({ "goals._id": args.goalId }, { "$set": { "goals.$.progressHours": currentGoal.progressHours + args.progressHours } });
      return User;
    }
  }
};

module.exports = resolvers;