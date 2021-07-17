import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
    token
    user{
      email
    }
  }
}`;


export const ADD_GOAL = gql`
mutation addGoal($language: String!, $goalHours: Int!){
  addGoal(language: $language, goalHours: $goalHours){
     goals{
      language
      goalHours
    } 
    }
}`;


export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const UPDATE_USER = gql`
mutation updateGoal($goalId: ID! $progressHours: Int!){
  updateGoal(goalId: $goalId, progressHours: $progressHours){
    
      goals{
        language
        progressHours
        goalHours
        _id
      }
    }
}
`;