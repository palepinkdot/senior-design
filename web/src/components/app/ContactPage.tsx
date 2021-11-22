/**
 * MIT License

 Copyright (c) 2019 Segun Adebayo

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea, SimpleGrid, useColorModeValue, StackDivider,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import {BsGithub, BsDiscord, BsPerson, BsInstagram} from 'react-icons/bs';
import {Stack} from "@chakra-ui/core";
import {FeatureProps} from "framer-motion/dist/framer-motion";

function PhoneCall(){
    window.open('tel:15135555555');
}
export default function ContactPage() {
    return (
        <Container bg="#FFFFFF" maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    bg="#80B5F4"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#000000" fontWeight={"bold"}>
                                        Fill up the form below to contact
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdPhone color="#1970F1" size="20px" />}
                                                onClick={PhoneCall}>
                                                +1(513) 555-5555
                                            </Button>
                                            <Button
                                                as={"a"}
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdEmail color="#1970F1" size="20px" />}
                                                href={"mailto:support@swipet.dev"}>
                                                support@swipet.dev
                                            </Button>
                                            <Button
                                                as={"a"}
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #FC8181' }}
                                                leftIcon={<MdLocationOn color="#FC8181" size="20px" />}
                                                href={"https://goo.gl/maps/DXD53fwbU7aDzku97"}
                                                target={"_blank"}>
                                                Cincinnati, Ohio
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            aria-label="facebook"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#EBD9D9' }}
                                            icon={<MdFacebook size="28px" />}
                                        />
                                        <IconButton
                                            as={"a"}
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#EBD9D9' }}
                                            icon={<BsGithub size="28px" />}
                                            href={"https://github.com/palepinkdot/senior-design"}
                                            target={"_blank"}
                                        />
                                        <IconButton
                                            as={"a"}
                                            aria-label="instagram"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }} // TODO: Make sure to ask what colors for these hovers
                                            icon={<BsInstagram size="28px" />}
                                            href={"https://github.com/palepinkdot/senior-design"}
                                            target={"_blank"}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="red.300" fontWeight={"bold"}>
                                        <VStack spacing={5}>
                                            <FormControl id="name">
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<BsPerson color="gray.800" />}
                                                    />
                                                    <Input type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>E-Mail</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<MdOutlineEmail color="gray.800" />}
                                                    />
                                                    <Input type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Message</FormLabel>
                                                <Textarea
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="message"
                                                />
                                            </FormControl>
                                            <FormControl id="name" float="right">
                                                <Button
                                                    variant="solid"
                                                    bg="#0D74FF"
                                                    color="white"
                                                    _hover={{}}>
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}