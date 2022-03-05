import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  VStack,
  GridItem,
  Image,
  Grid,
  HStack,
  StackItem,
  Container,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import {
  useCreateAnimalMutation,
  useMeOrgQuery,
} from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
  SubmitButton,
  TextareaControl,
} from "formik-chakra-ui";
import * as Yup from "yup";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { IoOptions } from "react-icons/io5";
import { OrgNavBar } from "./OrgNavBar";

export default function AnimalForm() {
  const router = useRouter();

  const [createAnimal] = useCreateAnimalMutation();

  const { data, loading } = useMeOrgQuery({
    skip: isServer(),
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Your animal must have a name")
      .min(2, "name must be atleast 2 characters")
      .max(50, "cannot be more than 50 characters"),
    description: Yup.string()
      .required("Your animal must have a bio")
      .max(500, "cannot be more than 500 characters"),
    type: Yup.string().required("Your animals must have a type"),
    cost: Yup.number().min(0).required("Your animal must have a cost"),
  });

  const imgLocs = [];

  function ImageDropzone() {
    const AWS_API_ENDPOINT =
      "https://ohevjs7i77.execute-api.us-east-2.amazonaws.com/default/getPreSignedURLswipet";

    const options = {
      headers: {
        "Content-Type": "image/jpeg",
        "x-amz-acl": "public-read",
      },
    };

    let imagePreview = <Text>No files uploaded</Text>;
    const onDrop = (acceptedFiles) => {
      acceptedFiles.forEach(async (file) => {
        const response = await axios.get(AWS_API_ENDPOINT);
        const signedUrl = response.data["uploadURL"];
        const imgLocation =
          "https://swipet.s3.us-east-2.amazonaws.com/" + response.data["Key"];

        const result = await axios.put(signedUrl, file, {
          headers: {
            "Content-Type": "image/jpeg",
          },
        });

        imgLocs.push(imgLocation);
      });
      alert("Images uploading...");
    };
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
      onDrop,
    });

    let gallery = null;

    gallery = imgLocs.map((url) => (
      <StackItem
        key={url}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        height="100px"
        w="100px"
        borderRadius="4px"
        transition="all 500ms"
        overflow="hidden"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="center"
      >
        <Image w="100px" src={url} />
      </StackItem>
    ));

    if (gallery != null) {
      imagePreview = gallery;
    } else if (gallery == null) {
      imagePreview = <Text>No files uploaded</Text>;
    } else {
      imagePreview = <Text>No files uploaded</Text>;
    }

    return (
      <>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="5rem"
          border="4px"
          borderRadius={4}
          borderColor="#fff"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </Flex>
        <HStack justifyContent="center" wrap="wrap">
          {imagePreview}
        </HStack>
      </>
    );
  }

  const initialValues = {
    name: "Duke",
    description: "Hi, my name's duke",
    type: "Dog",
    orgId: "test",
    cost: 0,
    breed: "Doggy Dog",
    imageURL: "",
    size: "small - 16lbs",
    vaccines: "pfizer SARS",
    goodToKnow: "other important stuff",
    agencyEmail: "test@gmail.com",
  };

  return (
    <div>
      <OrgNavBar />
      <Container maxWidth="container.3xl" padding={0}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setErrors }) => {
            values.orgId = data.meOrg?.id;
            values.imageURL = imgLocs.toString();
            console.log(values);
            const formattedCost = values.cost.toString();
            values.cost = parseFloat(formattedCost);
            const response = await createAnimal({
              variables: { options: values },
            });
            if (response.data?.createAnimal.errors) {
              console.log(response.data.createAnimal.errors);
            } else if (response.data?.createAnimal.animal) {
              // worked
              router.push("/app/org-home");
            }
          }}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <Flex h="100vh" w="100h" as="form" onSubmit={handleSubmit as any}>
              <VStack
                w="60%"
                h="200%"
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
                  <GridItem colSpan={3} px="5"></GridItem>
                </SimpleGrid>
                <ImageDropzone />
              </VStack>
              <VStack
                w="full"
                h="full"
                p={10}
                spacing={10}
                alignItems="flex-start"
              >
                <Heading size="1xl">Primary Info:</Heading>
                <SimpleGrid columns={3} width="full" paddingBottom="5">
                  <GridItem colSpan={1} px="4">
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
                  <GridItem colSpan={1} px="4">
                    <InputControl
                      label="Name"
                      name="name"
                      helperText="Animal Name"
                    />
                  </GridItem>
                  <GridItem colSpan={1} px="4">
                    <NumberInputControl
                      name="cost"
                      label="Cost *"
                      helperText="If the pet is free, set 0."
                    />
                  </GridItem>
                  <GridItem colSpan={3} px="4" paddingTop="5">
                    <TextareaControl
                      name="description"
                      label="Bio *"
                      helperText="No more than 500 characters."
                    />
                  </GridItem>
                </SimpleGrid>
                <Heading size="1xl">Additional Animal Info:</Heading>
                <SimpleGrid columns={2} width="full" >
                  <GridItem colSpan={1} px="4" paddingTop="">
                    <TextareaControl
                      name="size"
                      label="Size"
                      helperText="Size of animal in lbs"
                    />
                  </GridItem>
                  <GridItem colSpan={1} px="4" paddingTop="">
                    <TextareaControl
                      name="vaccines"
                      label="Vaccine Info"
                      helperText="covid, rabies, etc."
                    />
                  </GridItem>
                  <GridItem colSpan={2} px="4" paddingTop="5">
                    <TextareaControl
                      name="goodToKnow"
                      label="Good To Know"
                      helperText="animal personality"
                    />
                  </GridItem>
                  <GridItem colSpan={2} px="4" paddingTop="5">
                    <TextareaControl
                      name="agencyEmail"
                      label="Agency Email"
                      helperText="contact email address"
                    />
                  </GridItem>
                  {/* <GridItem colSpan={1} px="5">
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
                  </GridItem> */}
                </SimpleGrid>
                <SimpleGrid columns={3} width="full">
                  <GridItem colSpan={3} px="5">
                    <ButtonGroup w="100%">
                      <SubmitButton w="100%">Submit</SubmitButton>
                    </ButtonGroup>
                  </GridItem>
                </SimpleGrid>
              </VStack>
            </Flex>
          )}
        </Formik>
      </Container>
    </div>
  );
}
