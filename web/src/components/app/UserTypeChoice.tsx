import {
  Box,
  VStack,
  Text,
  HStack,
  StackDivider,
  StackItem,
} from "@chakra-ui/react";
import React from "react";
import { WrapperVariant } from "../Wrapper";

interface LayoutProps {}

export const UserTypeChoice: React.FC<LayoutProps> = ({}) => {
  return (
    <VStack>
      <Text pb="16px" color="gray.300">
        Which option describes you best?
      </Text>
      <StackItem>
        <HStack>
          <StackItem>
            <Box
              as="a"
              href="/app/ado/register"
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
                Adopter
              </Text>
            </Box>
          </StackItem>
          <StackDivider />
          <StackItem>
            <Box
              as="a"
              href="/app/org/register"
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
                Organization
              </Text>
            </Box>
          </StackItem>
        </HStack>
      </StackItem>
    </VStack>
  );
};
