import React, {useState} from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent, AlertDialogFooter, AlertDialogHeader,
    AlertDialogOverlay,
    Box, Button,
    Center,
    Heading,
    HStack,
    Image,
    Text,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import {PetDetailModal} from "./PetDetailModal";
import {useRouter} from "next/router";
import {useCreateApplicationMutation} from "../../generated/graphql";

interface AnimalDataProps {
    data;
}

export const AnimalCard: React.FC<AnimalDataProps> = ({data}) => {
    const [createApplication] = useCreateApplicationMutation();
    const [count, setCount] = useState(0);
    const {
        isOpen: isAdoptOpen,
        onOpen: onAdoptOpen,
        onClose: onAdoptClose
    } = useDisclosure();

    const cancelRef = React.useRef()

    if (!data) {
        return <>Nothing here.</>;
    } else if (data) {
        //position: relative;
        // background-color: #fff;
        // width: 80vw;
        // max-width: 260px;
        // height: 300px;
        // box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.30);
        // border-radius: 20px;
        // background-size: cover;
        // background-position: center;
        return (
            <Center
                verticalAlign={"center"}
                justifyContent="center"
                // mb="100rem"
                mt="5%"
            >
                <Box
                    key={data.id}
                    display="flex"
                    alignItems="center"
                    alignSelf="center"
                    verticalAlign="center"
                    justifyContent="center"
                    flexDirection="column"
                    boxShadow="xl"
                    borderRadius="20px"
                    bgColor="white"
                    mb="100rem"
                    
                >
                    <HStack mt="" display={"flex"}>
                        <VStack alignItems="left" p="6">
                            <Text fontSize="md">{data.type}</Text>
                            <Heading fontSize="5xl" fontWeight="900">
                                {data.name}
                            </Heading>
                            <Text fontSize="lg">4 years old</Text>
                            <Text fontSize="md" as="i">
                                fee: ${data.cost}
                            </Text>
                        </VStack>
                        <Image
                            maxW="550px"
                            w={"70%"}
                            src={data.imageURL}
                            borderRadius="20px"
                            alignItems="center"
                            justifyContent="center"
                            display="flex"
                        >
                        </Image>
                    </HStack>
                    &nbsp;
                    <HStack pt="5">
                        <PetDetailModal pet={data}/>
                        &nbsp;
                        <Box
                            cursor={'pointer'}
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
                            onClick={onAdoptOpen}
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
                                                    animalId: data.id,
                                                    status: "Waiting",
                                                    agencyEmail: data.agencyEmail
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
                    </HStack>
                    &nbsp;
                </Box>
            </Center>
        );
    }
};
