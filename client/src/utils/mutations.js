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
  mutation addThought($blogPostTitle: String!, $blogPostImage: String!, $blogPostText: String!) {
    addThought(blogPostTitle: $blogPostTitle, blogPostImage: $blogPostImage, blogPostText: $blogPostText) {
      _id
      blogPostTitle
      blogPostImage
      blogPostText
      createdAt
      username
    }
  }
`;