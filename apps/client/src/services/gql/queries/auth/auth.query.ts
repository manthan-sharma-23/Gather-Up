import { gql } from "@apollo/client";

export const SIGNUP_USER_QUERY = gql`
  mutation Signup {
    mutation Signup($email: String!, $name: String, $password: String!) {
      signup(SignInputArgs: { email: $email, name: $name, password: $password }) {
        token
      }
    }    
  }
`;
