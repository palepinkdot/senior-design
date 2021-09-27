import { Text, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";

const Index: React.FC<{}> = ({}) => {
  return (
    <>
      <Layout>
        <Heading>Home</Heading>
        <Text>
          This is the homepage of Swipet, information about the app and company
          will be displayed here.
        </Text>
      </Layout>
    </>
  );
};

export default withApollo({ ssr: false })(Index);
