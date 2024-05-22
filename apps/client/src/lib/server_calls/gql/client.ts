import { Graphql_URL } from "@/lib/config/env";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: Graphql_URL,
});

export const GqlClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
