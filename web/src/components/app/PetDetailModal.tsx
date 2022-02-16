import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  StackDivider,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
// import { withApollo } from "../utils/withApollo";

interface PetDetailModalProps {
  pet;
}

export const PetDetailModal: React.FC<PetDetailModalProps> = ({ pet }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("full");
  return (
    <>
      <Box
        onClick={onOpen}
        as="a"
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
          More details
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>More Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              justify="space-around"
              bg="blue.100"
              borderRadius="20"
              w="100%"
              flexDirection="column"
            >
              <VStack p={6} alignItems="left">
                <HStack>
                  <Box
                    h="275px"
                    w="450px"
                    bgImage={pet.imageURL}
                    borderRadius="20px"
                  ></Box>
                  <Box>
                    <VStack spacing={20}>
                      <Icon as={ChevronUpIcon} w={12} h={12} color="blue.50" />
                      <Icon
                        as={ChevronDownIcon}
                        w={12}
                        h={12}
                        color="blue.50"
                      />
                    </VStack>
                  </Box>
                </HStack>
                <VStack alignItems="left">
                  <Text fontSize="md">{pet.breed}</Text>
                  <Heading fontSize="5xl" fontWeight="900">
                    {pet.name}
                  </Heading>
                  <Text fontSize="lg">4 years old</Text>
                  <Text fontSize="md" as="i">
                    fee: $180
                  </Text>
                </VStack>
              </VStack>

              <Flex
                justify="space-around"
                bg="white"
                borderRadius="20"
                w="100%"
                flexDirection="column"
              >
                <VStack p={6} alignItems="left">
                  <Heading fontSize="2xl" fontWeight="900">
                    Bio
                  </Heading>
                  <Text fontSize="lg">{pet.description}</Text>
                  <Heading fontSize="2xl" fontWeight="900">
                    Animal Information
                  </Heading>
                  <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    alignItems="left"
                    verticalAlign="top"
                    spacing={6}
                    paddingLeft="10px"
                    paddingRight="25px"
                  >
                    <HStack alignItems="center" spacing="205px">
                      <Heading fontSize="lg" fontWeight="400">
                        Size:
                      </Heading>
                      <Text fontSize="md"> Small - 15lbs </Text>
                    </HStack>
                    <HStack alignItems="center" spacing="112px">
                      <Heading fontSize="lg" fontWeight="400">
                        Vaccine Info:
                      </Heading>
                      <Text fontSize="md"> pfizer SARS-19 Vaccine </Text>
                    </HStack>
                    <HStack alignItems="center" spacing="142px">
                      <Heading fontSize="lg" fontWeight="400">
                        Good to Know:
                      </Heading>
                      <Text fontSize="md">
                        {" "}
                        Other important info such as time in shelter and yah{" "}
                      </Text>
                    </HStack>
                    <HStack alignItems="center" spacing="115px">
                      <Heading fontSize="lg" fontWeight="550">
                        Agency <br /> Information:
                      </Heading>
                      <VStack align="left">
                        <Text fontSize="md"> 513-123-1234 </Text>
                        <Text fontSize="md"> sheltername@gmail.com </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </VStack>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Box
              as="a"
              href="#"
              alignItems="center"
              onClick={onClose}
              py={3}
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
              alignSelf="left"
            >
              <Text
                as="i"
                px="10"
                color="white"
                fontSize="1.2rem"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Adopt Now
              </Text>
            </Box>
            <Button
              colorScheme="gray"
              mr={6}
              ml={10}
              onClick={onClose}
              borderRadius="20"
              variant={"ghost"}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
