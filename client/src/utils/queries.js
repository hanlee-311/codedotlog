import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      goals{
        language
        goalHours
        progressHours
        _id
      }
    }
  }
  `