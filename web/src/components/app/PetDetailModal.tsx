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
  AlertDialogCloseButton, AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  textDecoration
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {useMeOrgQuery } from "../../generated/graphql";
import {useCreateApplicationMutation} from "../../generated/graphql";
// import { withApollo } from "../utils/withApollo";

interface PetDetailModalProps {
  pet;
  showAdopt?: boolean;
}

export const PetDetailModal: React.FC<PetDetailModalProps> = ({ pet, showAdopt = true }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("full");
  const [createApplication] = useCreateApplicationMutation();
  const [count, setCount] = useState(0);

  const {
    isOpen: isAdoptOpen,
    onOpen: onAdoptOpen,
    onClose: onAdoptClose
  } = useDisclosure();

  const cancelRef = React.useRef()

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

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>More Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              justify="space-around"
              bg="blue.100"
              borderRadius="20"
              borderColor="blue.200"
              borderWidth="3px"
              w="100%"
              flexDirection="row"
            >
              <VStack p={6} alignItems="left">
                <HStack>
                  <Image
                    // h="245px"
                    // w="350px"
                    w="85%"
                    src={pet?.imageURL}
                    borderRadius="20px"
                  ></Image>
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
                  <Text fontSize="md">{pet?.type}</Text>
                  <Heading fontSize="5xl" fontWeight="900">
                    {pet?.name}
                  </Heading>
                  <Text fontSize="lg">4 years old</Text>
                  <Text fontSize="md" as="i">
                    fee: ${pet?.cost}
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
                  <Text fontSize="lg">{pet?.description}</Text>
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
                      <Text fontSize="md">{pet?.size}</Text>
                    </HStack>
                    <HStack alignItems="center" spacing="112px">
                      <Heading fontSize="lg" fontWeight="400">
                        Vaccine Info:
                      </Heading>
                      <Text fontSize="md">{pet?.vaccines}</Text>
                    </HStack>
                    <HStack alignItems="center" spacing="142px">
                      <Heading fontSize="lg" fontWeight="400">
                        Good to Know:
                      </Heading>
                      <Text fontSize="md">{pet?.goodToKnow}</Text>
                    </HStack>
                    <HStack alignItems="center" spacing="115px">
                      <Heading fontSize="lg" fontWeight="550">
                        Agency Email:
                      </Heading>
                      <Text fontSize="md">{pet?.agencyEmail}</Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            { showAdopt ?
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
              alignSelf="left"
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
            </Box> : null
            }
            <AlertDialog
                motionPreset='slideInBottom'
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
                  Are you sure you want to submit an application for this animal?
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
                            agencyEmail: pet?.agencyEmail
                          }
                          const response = await createApplication({
                            variables: {options: values},
                          });
                          if (response.data?.createApplication.errors) {
                            console.log(response.data?.createApplication.errors)
                          } else if (response.data?.createApplication.application) {
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
