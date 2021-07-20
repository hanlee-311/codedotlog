import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      goals{
        language
        goalHours
        progressHours
        _id
      }
    }
  }
  `