import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query thoughts($username: String) {
    thoughts(username: $username) {
      _id
      thoughtTitle
      thoughtImage
      thoughtText
      createdAt
      username
    }
  },
`;

export const QUERY_THOUGHT = gql`
  query thought($id: ID!) {
    thought(_id: $id) {
      _id
      thoughtTitle
      thoughtImage
      thoughtText
      createdAt
      username
    }
  }
`;
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtTitle
        thoughtImage
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtTitle
        thoughtImage
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;