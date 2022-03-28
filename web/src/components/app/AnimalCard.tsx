import React, {useState} from "react";
import {
    Button,
    Center,
    Flex,
    Heading,
    HStack,
    Image, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
    Text,
    useDisclosure,
    VStack,
    Modal
} from "@chakra-ui/react";
import {PetDetailModal} from "./PetDetailModal";
import {useRouter} from "next/router";
import {useCreateApplicationMutation} from "../../generated/graphql";
import {toast, Toaster} from "react-hot-toast";

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
                <Flex
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
                    // w={[300, 400, 700]}
                    
                >
                    <div><Toaster/></div>
                    <HStack display="flex" >
                        <VStack alignItems="left" p="8"  >
                            <Text fontSize="md">{data.type}</Text>
                            <Heading fontSize="5xl" fontWeight="900">
                                {data.name}
                            </Heading>
                            <Text fontSize="lg">4 years old</Text>
                            <Text fontSize="md" as="i">
                                fee: ${data.cost}
                            </Text>
                        </VStack>
                        <Flex alignContent="right" p="8" >
                        <Image
                            w={[150, 250, 350]}
                            // maxW="400"
                            maxH="18em"
                            maxW="18em"
                            // w={"70%"}
                            src={data.imageURL}
                            borderRadius="20px"
                            alignSelf="right"
                            justifyContent="center"
                            display="flex"
                            
                        >
                        </Image>
                        </Flex>
                        
                    </HStack>
                    &nbsp;
                    <HStack pt="5">
                        <PetDetailModal pet={data}/>
                        &nbsp;
                        <Flex
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
                        </Flex>
                        <Modal
                            onClose={onAdoptClose}
                            isOpen={isAdoptOpen}
                            isCentered
                        >
                            <ModalOverlay />

                            <ModalContent>
                                <ModalHeader>Submit Application?</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    Are you sure you want to submit an application for this animal?
                                </ModalBody>
                                <ModalFooter>
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
                                            try {
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
                                                        console.log(response.data?.createApplication.errors);
                                                        toast.error("Error submitting application");
                                                    } else if (response.data?.createApplication.application) {
                                                        // worked
                                                        setCount(count + 1);
                                                        toast.success('Application for ' + data.name.toString() +
                                                            ' has been successfully submitted');
                                                    }
                                                }
                                                onAdoptClose();
                                            }  catch(e: unknown) {
                                                toast.error("Error submitting application");
                                        }}}
                                    >
                                        Yes
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </HStack>
                    &nbsp;
                </Flex>
            </Center>
        );
    }
};
