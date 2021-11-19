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
  Box,
  Button,
} from "@chakra-ui/react";
import { withApollo } from "../../../utils/withApollo";
import HomeFooter from "../../../components/home/HomeFooter";

import Carousel from "../../../components/carousel/Carousel";
import SlideOne from "../../../components/carousel/SlideOne";
import SlideTwo from "../../../components/carousel/SlideTwo";
import SlideThree from "../../../components/carousel/SlideThree";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
  TextareaControl,
} from "formik-chakra-ui";
import { Formik } from "formik";
import { isServer } from "../../../utils/isServer";
import { useMeOrgQuery } from "../../../generated/graphql";
import * as Yup from "yup";
import { useRouter } from "next/router";

const AnimalUploadPage: React.FC<{}> = ({}) => {
  const router = useRouter();

  //const [createAnimal] = useCreateAnimalMutation();

  const { data, loading } = useMeOrgQuery({
    skip: isServer(),
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Your animal must have a name")
      .min(2, "name must be atleast 2 characters")
      .max(50, "cannot be more than 50 characters"),
    bio: Yup.string()
      .required("Your animal must have a bio")
      .max(500, "cannot be more than 500 characters"),
    type: Yup.string().required("Your animals must have a type"),
    streetAddress: Yup.string().required("Your event must have an address"),
    city: Yup.string().required("Your event must have a city"),
    state: Yup.string().required("Your event must have a state"),
    zipcode: Yup.string()
      .required("Your event must have a zipcode")
      .matches(/^[0-9]+$/, "must be only digits")
      .min(5, "must be exactly 5 digits")
      .max(5, "must be exactly 5 digits"),
    cost: Yup.number().min(0).required("Your event must have a cost"),
    startDate: Yup.string().required("Your event must have a start date"),
    startTime: Yup.string().required("Your event must have a start time"),
    endDate: Yup.string().required("Your event must have a end date"),
    endTime: Yup.string().required("Your event must have a end time"),
  });
  const initialValues = {
    name: "",
    bio: "",
    type: "",
    imageURL: "",
    buildingName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    lat: "",
    lng: "",
    cost: 0,
    eventURL: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  };

  return (
    <Container maxWidth="container.3xl" padding={0}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) => {
          const response = await createAnimal({
            variables: { options: values },
          });
          if (response.data?.createEvent.errors) {
            console.log(response.data.createEvent.errors);
          } else if (response.data?.createEvent.event) {
            // worked
            router.push("/");
          }
        }}
        validationSchema={validationSchema}
      >
        <Flex h="100vh" w="100hh">
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="center"
            bg="blue.300"
          >
            <SimpleGrid
              columns={3}
              width="full"
              marginLeft="5"
              paddingBottom="5"
            >
              <GridItem colSpan={3} px="5">
                <Carousel>
                  <SlideOne />
                  <SlideTwo />
                  <SlideThree />
                </Carousel>
              </GridItem>
            </SimpleGrid>

            <Button
              href="/app/get-started"
              p={4}
              borderRadius="full"
              textAlign="center"
              bgColor="#FFFFFF"
              _active={{
                transform: "scale(0.95)",
              }}
            >
              Add Images
            </Button>
          </VStack>
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <Heading size="1xl">Primary Info:</Heading>
            <SimpleGrid columns={3} width="full" paddingBottom="5">
              <GridItem colSpan={1} px="5">
                <SelectControl
                  label="Type"
                  name="type"
                  placeholder="Type of Animal"
                >
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                  <option value="turtle">Turtle</option>
                  <option value="hamster">Hamster</option>
                </SelectControl>
              </GridItem>
              <GridItem colSpan={1} px="5">
                <InputControl
                  label="Name"
                  name="name"
                  helperText="Animal Name"
                />
              </GridItem>
              <GridItem colSpan={1} px="5">
                <NumberInputControl
                  name="cost"
                  label="Cost *"
                  helperText="If the pet is free, set 0."
                />
              </GridItem>
              <GridItem colSpan={3} px="5" paddingTop="5">
                <TextareaControl
                  name="bio"
                  label="Bio *"
                  helperText="No more than 500 characters."
                />
              </GridItem>
            </SimpleGrid>
            <Heading size="1xl">Additional Animal Info:</Heading>
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
                  POST
                </Box>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Formik>
    </Container>
  );

  return null;
};

export default withApollo()(AnimalUploadPage);
