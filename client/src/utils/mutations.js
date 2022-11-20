import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtTitle: String!, $thoughtImage: String!, $thoughtText: String!) {
    addThought(thoughtTitle: $thoughtTitle, thoughtImage: $thoughtImage, thoughtText: $thoughtText) {
      _id
      thoughtTitle
      thoughtImage
      thoughtText
      createdAt
      username
    }
  }
`;