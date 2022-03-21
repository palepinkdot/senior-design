import React, { useState } from "react";
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useMeOrgQuery } from "../../generated/graphql";
import { useCreateApplicationMutation } from "../../generated/graphql";
// import { withApollo } from "../utils/withApollo";

interface PetDetailModalProps {
  pet;
  showAdopt?: boolean;
}

export const PetDetailModal: React.FC<PetDetailModalProps> = ({
  pet,
  showAdopt = true,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("full");
  const [createApplication] = useCreateApplicationMutation();
  const [count, setCount] = useState(0);

  const {
    isOpen: isAdoptOpen,
    onOpen: onAdoptOpen,
    onClose: onAdoptClose,
  } = useDisclosure();

  const cancelRef = React.useRef();

  return (
    <>
      <Box
        cursor="pointer"
        onClick={onOpen}
        as="a"
        p={3}
        borderRadius="full"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        bgColor=""
        _active={{
          transform: "scale(0.95)",
        }}
      >
        <Text
          _hover={{
            textDecoration: "underline",
          }}
          px="5"
          color="black"
          fontSize="1rem"
          fontWeight="bold"
          textTransform="uppercase"
        >
          More details
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>More Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              // justify="center"
              // bg="red"
              borderRadius="20"
              // borderColor="blue.200"
              // borderWidth="3px"
              // w="90%"
              flexDirection="row"
            >
              <VStack p={3} alignItems="left" bg="blue.100" borderRadius="20">
                <Image
                  maxH="250px"
                  maxW="230px"
                  w={[150, 230, 230]}
                  src={pet?.imageURL}
                  borderRadius="20px"
                ></Image>
                {/* <Box>
                    <VStack spacing={20}>
                      <Icon as={ChevronUpIcon} w={12} h={12} color="blue.50" />
                      <Icon
                        as={ChevronDownIcon}
                        w={12}
                        h={12}
                        color="blue.50"
                      />
                    </VStack>
                  </Box> */}

                <Text fontSize="md">{pet?.type}</Text>
                <Heading fontSize="4xl" fontWeight="900">
                  {pet?.name}
                </Heading>
                <Text fontSize="lg">4 years old</Text>
                <Text fontSize="md" as="i">
                  fee: ${pet?.cost}
                </Text>
              </VStack>

              <Flex
                // justify="space-around"
                bg="white"
                alignSelf="left"
                borderRadius="20"
                // w="100%"
                flexDirection="row"
              >
                <VStack p={3} alignItems="left">
                  <Heading fontSize="2xl" fontWeight="900" textAlign="left">
                    Bio
                  </Heading>
                  <Text fontSize="lg" pl="10px" >{pet?.description}</Text>
                  <Heading fontSize="2xl" fontWeight="900">
                    Animal Information
                  </Heading>
                  <SimpleGrid
                    columns={3}
                    spacing={2.5}
                    // minChildWidth="100px"
                    pl="10px"
                  >
                    <GridItem colSpan={1}>
                      <Heading
                        fontSize="lg"
                        fontWeight="400"
                        alignContent="left"
                      >
                        Size:
                      </Heading>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text fontSize="md">{pet?.size} </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Heading
                        fontSize="lg"
                        fontWeight="400"
                        alignContent="left"
                      >
                        Vaccine Info:
                      </Heading>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text fontSize="md">{pet?.vaccines} </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Heading
                        fontSize="lg"
                        fontWeight="400"
                        alignContent="left"
                      >
                        Good to Know:
                      </Heading>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text fontSize="md">{pet?.goodToKnow} </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Heading
                        fontSize="lg"
                        fontWeight="400"
                        alignContent="left"
                      >
                        Agency Email:
                      </Heading>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text fontSize="md">{pet?.agencyEmail} </Text>
                    </GridItem>
                  </SimpleGrid>
                </VStack>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            {showAdopt ? (
              <Box
                as="a"
                alignItems="center"
                onClick={onAdoptOpen}
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
                alignSelf="center"
              >
                <Text
                  as="i"
                  px="10"
                  color="white"
                  fontSize="1.2rem"
                  fontWeight="bold"
                  textTransform="uppercase"
                  onClick={onAdoptOpen}
                >
                  Adopt Now
                </Text>
              </Box>
            ) : null}
            <AlertDialog
              motionPreset="slideInBottom"
              leastDestructiveRef={cancelRef}
              onClose={onAdoptClose}
              isOpen={isAdoptOpen}
              isCentered
            >
              <AlertDialogOverlay />

              <AlertDialogContent>
                <AlertDialogHeader>Submit Application?</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  Are you sure you want to submit an application for this
                  animal?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button
                    ref={cancelRef}
                    onClick={onAdoptClose}
                    fontSize="1.2rem"
                    fontWeight="bold"
                  >
                    No
                  </Button>
                  <Button
                    bgColor="blue.400"
                    fontSize="1.2rem"
                    fontWeight="bold"
                    color={"white"}
                    _hover={{
                      bgColor: "red.300",
                      transform: "scale(1.05)",
                    }}
                    onClick={async () => {
                      if (count == 0) {
                        let values = {
                          animalId: pet?.id,
                          status: "Waiting",
                          agencyEmail: pet?.agencyEmail,
                        };
                        const response = await createApplication({
                          variables: { options: values },
                        });
                        if (response.data?.createApplication.errors) {
                          console.log(response.data?.createApplication.errors);
                        } else if (
                          response.data?.createApplication.application
                        ) {
                          // worked
                          setCount(count + 1);
                        }
                      }
                      onAdoptClose();
                    }}
                  >
                    Yes
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button
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
