import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GQL_SERVER } from "../../utils/config/env";

export const client = new ApolloClient({
  uri: GQL_SERVER,
  cache: new InMemoryCache(),
});
