import React from "react";
import {
  Container,
  Flex,
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

import Carousel from "../components/carousel/Carousel";
import SlideOne from '../components/carousel/SlideOne';
import SlideTwo from '../components/carousel/SlideTwo';
import SlideThree from '../components/carousel/SlideThree';

const AnimalUploadPage: React.FC<{}> = ({}) => {
  return (
    
    <Container maxWidth="container.3xl" padding={0}>
      <Flex h="100vh" w="100hh">        
        <VStack w="full" h="full" p={10} spacing={10} alignItems="center" bg="blue.300">
          <Heading size="1xl" alignSelf="flex-start">Dashboard / <b>Post Animal</b></Heading>
          <SimpleGrid columns={3} width="full" marginLeft="5" paddingBottom="5">
            <GridItem colSpan={3} px="5">
              <Carousel>
                <SlideOne />
                <SlideTwo />
                <SlideThree />
              </Carousel>
            </GridItem>
          </SimpleGrid>
          <div>
            <Box
              href="/app/get-started"
              p={4}
              borderRadius="full" 
              textAlign="center"                
              bgColor="#FFFFFF"                
              _active={{
                transform: "scale(0.95)",
              }}
            >
              <Text                  
                px="10"
                color="#000000"
                fontSize="1.2rem"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Add Images
              </Text>
            </Box>
          </div>
        </VStack>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <Heading size="1xl">
            Primary Info:
          </Heading>
          <SimpleGrid columns={3} width="full" paddingBottom="5">
            <GridItem colSpan={1} px="5">
              <FormControl>
                <FormLabel>
                  <b>Type</b>
                </FormLabel>
                <Input placeholder="Dog" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1} px="5">
            <FormControl>
                <FormLabel>
                <b>Name</b>
                </FormLabel>
                <Input placeholder="Dog Name" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1} px="5">
            <FormControl>
                <FormLabel>
                <b>Fee $:</b>
                </FormLabel>
                <Input placeholder="180" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={3}  px="5" paddingTop="5">
            <FormControl>
                <FormLabel>
                <b>Bio</b>
                </FormLabel>
                <Input placeholder="Please add bio information" />
              </FormControl>
            </GridItem>            
          </SimpleGrid>
          <Heading size="1xl">
            Additional Animal Info:
          </Heading>
          <SimpleGrid columns={2} width="full" py={5}>
            <GridItem colSpan={1} px="5">
            <FormControl>
                <FormLabel>
                  <b>Size</b>
                </FormLabel>               
              </FormControl>
            </GridItem>
            <GridItem colSpan={1} px="5">
            <FormControl>                
                <Input placeholder="Size of Animal" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2} p={5}>
              <Divider />
            </GridItem>
            <GridItem colSpan={1} px="5">
            <FormControl>
                <FormLabel>
                  <b>Vaccine Info</b>
                </FormLabel>               
              </FormControl>
            </GridItem>
            <GridItem colSpan={1} px="5">
            <FormControl>                
                <Input placeholder="Vaccine Info" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2} p={5}>
              <Divider />
            </GridItem>
            <GridItem colSpan={1} px="5">
            <FormControl>
                <FormLabel>
                  <b>Good to know</b>
                </FormLabel>               
              </FormControl>
            </GridItem>
            <GridItem colSpan={1} px="5">
            <FormControl>                
                <Input placeholder="Other additional Animal Info" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2} p={5}>
              <Divider />
            </GridItem>
            <GridItem colSpan={1} px="5">
            <FormControl>
                <FormLabel>
                  <b>Agency Information</b>
                </FormLabel>               
              </FormControl>
            </GridItem>
            <GridItem colSpan={1} px="5">
            <FormControl>                
                <Input placeholder="Agency contact information (email, phone, etc.)" />
              </FormControl>
            </GridItem>            
            </SimpleGrid>
            <SimpleGrid columns={3} width="full">            
            <GridItem colSpan={3} px="5">
              <Box
                
                href="/app/get-started"
                p={4}
                borderRadius="full" 
                textAlign="center"
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
                  px="20"
                  color="white"
                  fontSize="1.2rem"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  POST
                </Text>
              </Box>
            </GridItem>            
          </SimpleGrid>
        </VStack>
      </Flex>
      <HomeFooter></HomeFooter>
    </Container>
    

  );

  return null;
};

export default withApollo()(AnimalUploadPage);


