import { gql } from "@apollo/client";

export const SIGNIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    signin(SignInputArgs: { email: $email, password: $password }) {
      token
    }
  }
`;

export const HELLO_QUERY = gql`
  query hello {
    hello {
      hello
    }
  }
`;
