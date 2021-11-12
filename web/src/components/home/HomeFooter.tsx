import {
  Box,
  chakra,
  Container,
  Stack,
  SimpleGrid,
  GridItem,
  Link,
  Text,
  useColorModeValue,
  Flex,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React, { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"800"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bgGradient="linear(blue.300 50%, red.200)"
      color={useColorModeValue("white", "white")}
      position={"absolute"}
      width={"100%"}
      margin="0"
      overflow="hidden"
    >
      <Flex
        pt={8}
        pb={8}
        w="100%"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <SimpleGrid columns={6} width="full">
          <GridItem colSpan={2} px="5">
            <VStack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Contact Us</Link>
            </VStack>
          </GridItem>
          <GridItem colSpan={2} px="5">
            <VStack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Safety Center</Link>
              <Link href={"#"}>Community Guidelines</Link>
            </VStack>
          </GridItem>
          <GridItem colSpan={2} px="5">
            <VStack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Link href={"/policy/cookies"}>Cookies Policy</Link>
              <Link href={"/policy/privacy"}>Privacy Policy</Link>
              <Link
                as="a"
                href={"https://swipet.s3.us-east-2.amazonaws.com/TOS.pdf"}
                target="_blank"
              >
                Terms of Service
              </Link>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Flex>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontWeight="semibold">
            © 2021 Swipet // All rights reserved
          </Text>
          <Stack
            direction={"row"}
            spacing={6}
            display={{ base: "none", md: "flex" }}
          >
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
