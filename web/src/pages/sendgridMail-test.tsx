import React from "react";
import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { HomeLayout } from "../components/home/HomeLayout";
import { HomeWrapper } from "../components/home/HomeWrapper";


const sendgridmail: React.FC<{}> = ({}) => {
  const sgMail = require("@sendgrid/mail");
  console.log("hi param");
  console.log(sgMail);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const acceptedMSG_ADO = {
    to: "torcatobvaz@gmail.com", //replace with adopter user email
    from: "swipet.dev@gmail.com",
    subject: "Your Pet Adoption Application was Accepted",
    text: "Congratulations! Please pick up your new pet at the Shelter",
    html: "<strong>You have helped find a new home, thank you! </strong>",
  };

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
          </VStack>
        </HomeWrapper>
      </HomeLayout>
    </>
  );

  return null;
};

export default withApollo()(sendgridmail);
