import React from "react";
import { AppLayout } from "../../components/app/AppLayout";
import { AppWrapper } from "../../components/app/AppWrapper";
import { Layout } from "../../components/Layout";
import { useIsAuth } from "../../utils/useIsAuth";
import { withApollo } from "../../utils/withApollo";
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
  HStack,
} from "@chakra-ui/react";

const AppGetStarted: React.FC<{}> = ({}) => {
  //   useIsAuth();
  return (
    <AppLayout>
      <AppWrapper>
        <VStack>
          <Text pb="16px" color="gray.300">
            Which option describes you best?
          </Text>
          <StackItem>
            <HStack>
              <StackItem>
                <Box
                  as="a"
                  href="/app/get-started"
                  p={4}
                  borderRadius="full"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  bgColor="blue.400"
                  _hover={{
                    bgColor: "red.300",
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
              </StackItem>
              <StackDivider />
              <StackItem>
                <Box
                  as="a"
                  href="/app/get-started"
                  p={4}
                  borderRadius="full"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  bgColor="blue.400"
                  _hover={{
                    bgColor: "red.300",
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
              </StackItem>
            </HStack>
          </StackItem>
        </VStack>
      </AppWrapper>
    </AppLayout>
  );

  return null;
};

export default withApollo({ ssr: false })(AppGetStarted);
