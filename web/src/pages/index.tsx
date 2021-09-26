import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { withApollo } from "../utils/withApollo";

const Index: React.FC<{}> = ({}) => {
  return (
    <>
      <Layout boxHeight="100vh">
        <h1>
          This is the homepage of Swipet, information about the app and company
          will be displayed here.
        </h1>
      </Layout>
    </>
  );
};

export default withApollo({ ssr: false })(Index);
