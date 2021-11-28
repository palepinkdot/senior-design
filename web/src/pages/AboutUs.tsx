import React from "react";
import {
  Container,
  Flex,
  HStack,
  VStack,
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  GridItem,
  Divider,
  Text,
  Box
} from "@chakra-ui/react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  AddIcon,
  MinusIcon
} from "@chakra-ui/icons"
import { withApollo } from "../utils/withApollo";
import HomeFooter from "../components/home/HomeFooter";

import { OrgNavBar } from "../components/app/OrgNavBar";

const AnimalUploadPage: React.FC<{}> = ({}) => {
  return (
    
    <Container maxWidth="container.3xl" padding={0}>
        <OrgNavBar />
        <HStack w="full" h="full" p={10} spacing={10} alignItems="center" bg="blue.300" bgGradient="linear(to-tl, blue.300, black)">
          <VStack align="stretch" >
            <Box as="i" color="white">
              <Heading size="3xl" alignSelf="start" as="u" >Mission:</Heading>
            </Box>
            <Box px="50" paddingTop="5">
              <Text color="whitesmoke" fontSize="2xl" fontWeight="semibold" align="center">Swipet is a web-based platform connecting people looking to adopt pets with animals from shelters. Upon signing up, users are able to browse a diverse catalog of animals housed in local animal rescue shelters. Swipet brings local sheltered animals to the fingertips of everyday users. General users (adopters) are able to filter and sort animals based on a variety of attributes. Organizations (shelters) are able to post, monitor activity, and review adoption applications of these sheltered animals. The objective of Swipet is to bring sheltered animals into the hands of adopters. This is accomplished by clean and attractive interface that caters to both adopters and animal rescue shelters/organizations. </Text>
            </Box>
          </VStack>
        </HStack>
        <HStack w="full" h="full" p={10} spacing={10} alignContent="center" bg="red.300" bgGradient="linear(to-br, red.300, black 100%)">
          <VStack align="stretch" >
            <Box as="i" color="white">
              <Heading size="3xl" alignSelf="start" as="u" >Meet the Team:</Heading>
            </Box>
            <Box paddingTop="5">
              <SimpleGrid columns={4} width="full" paddingBottom="5" >
                <GridItem colSpan={1} paddingLeft="5" color="white">
                  <img src="https://via.placeholder.com/200" />
                  <Text fontSize="2xl" as="abbr">Kyle Marler</Text>
                  <br />
                  <Text fontSize="xl" as="em">- "Great text by Kyle"</Text>
                </GridItem>
                <GridItem colSpan={1} paddingLeft="5" color="white">
                  <img src="https://via.placeholder.com/200" />
                  <Text fontSize="2xl" as="abbr">Max Gramman</Text>
                  <br />
                  <Text fontSize="xl" as="em">- "Great text by Max"</Text>
                </GridItem>
                <GridItem colSpan={1} paddingLeft="5" color="white">
                  <img src="https://via.placeholder.com/200" />
                  <Text fontSize="2xl" as="abbr">Paramjyot Sandhu</Text>
                  <br />
                  <Text fontSize="xl" as="em">- "Great text by Paramjyot"</Text>
                </GridItem>
                <GridItem colSpan={1}  paddingLeft="5" color="white">
                  <img src="https://via.placeholder.com/200" />
                  <Text fontSize="2xl" as="abbr">Torcato Vaz</Text>
                  <br />
                  <Text fontSize="xl" as="em">- "Great text by Torcato"</Text>
                </GridItem>            
              </SimpleGrid>
            </Box>
          </VStack>          
        </HStack>
     
      <HomeFooter></HomeFooter>
    </Container>
    

  );

  return null;
};

export default withApollo()(AnimalUploadPage);


