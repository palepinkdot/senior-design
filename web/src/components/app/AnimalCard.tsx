import React from "react";
import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    Image,
    VStack,
    HStack,
} from "@chakra-ui/react";
import { PetDetailModal } from "./PetDetailModal";

interface WrapperProps { }

export const AnimalCard: React.FC<WrapperProps> = ({ }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            alignSelf="center"
            justifyContent="space-evenly"
            flexDirection="column"
            w="80vw"
            height="80vh"
            boxShadow="xl"
            borderRadius="16px"
            zIndex="1"
            bgColor="white"
        >
            <HStack justify="space-around" w={"100%"}>
                <VStack alignItems="left">
                    <Text fontSize="md">German Shepard</Text>
                    <Heading fontSize="5xl" fontWeight="900">
                        Juno
                    </Heading>
                    <Text fontSize="lg">4 years old</Text>
                    <Text fontSize="md" as="i">
                        fee: $180
                    </Text>
                </VStack>
                <Box w="33vw" h="66vh" bgColor="red.100" borderRadius="20px"></Box>
            </HStack>
            <PetDetailModal />
        </Box>
    );
};