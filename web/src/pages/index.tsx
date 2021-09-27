import { Text, Box, Heading, Flex, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { HomeLayout } from "../components/home/HomeLayout";
import { HomeWrapper } from "../components/home/HomeWrapper";
import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";

const Index: React.FC<{}> = ({}) => {
  return (
    <>
      <HomeLayout>
        <HomeWrapper>
          <VStack>
            <Heading fontSize="9vw" fontWeight="900" color="white">
              Swipet
            </Heading>
            <Text fontSize="2rem" fontWeight="normal" color="white">
              Find your newest family member with ease.
            </Text>
          </VStack>
        </HomeWrapper>
      </HomeLayout>
    </>
  );
};

export default withApollo({ ssr: true })(Index);
