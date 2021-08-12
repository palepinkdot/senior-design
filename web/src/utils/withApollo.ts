import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { createWithApollo } from "./createWithApollo";

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: "http://localhost:4000/graphql",
    credentials: "include",

    cache: new InMemoryCache(),
  });

export const withApollo = createWithApollo(createClient);
