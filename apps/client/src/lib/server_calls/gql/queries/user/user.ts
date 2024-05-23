import { gql } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query GetUser {
    user {
      createdAt
      email
      hashedPassword
      id
      mergedCalendarId
      name
      updatedAt
      userCalenderId
    }
  }
`;
