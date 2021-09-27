import {
  Text,
  Box,
  Heading,
  Flex,
  Grid,
  VStack,
  Spacer,
  StackItem,
  StackDivider,
} from "@chakra-ui/react";
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
            <Text pb="4" fontSize="2rem" fontWeight="normal" color="white">
              Find your newest family member with ease.
            </Text>

            <Box
              as="button"
              p={4}
              borderRadius="full"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              bgColor="pink.300"
              _hover={{
                bgColor: "blue.200",
                transform: "scale(1.05)",
              }}
              _active={{
                transform: "scale(0.95)",
              }}
            >
              <Text
                as="i"
                px="10"
                color="white"
                fontSize="1.2rem"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Get Started!
              </Text>
            </Box>
          </VStack>
        </HomeWrapper>
      </HomeLayout>
    </>
  );
};

export default withApollo({ ssr: false })(Index);
