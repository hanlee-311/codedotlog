const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    goals: [Goal]
  }

  type Goal {
    _id: ID
    language: String
    goalHours: Int
    progressHours: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: User
    user(_id:ID!): User
    goal(_id: ID!): Goal
    goals: Goal
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addGoal(_id: ID!, language: String!, goalHours: Int!): User
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateGoal(goalId: ID!, progressHours: Int): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
