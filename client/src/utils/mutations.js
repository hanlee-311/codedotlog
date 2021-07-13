import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
    token
    user{
      email
    }
  }
}
`;

export const ADD_GOAL = gql`
mutation addGoal($language: String!, $goalHours: Int!, $goalCreated: String!){
  addGoal(language: $language, goalHours: $goalHours, goalCreated: $goalCreated){
      language
    	goalHours
      goalCreated
    }
}
`;