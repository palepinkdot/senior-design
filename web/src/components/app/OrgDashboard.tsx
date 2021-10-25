import {
    Flex,
    Heading,
    Link,
    Icon,
    Text, Table, Tr, Td, Thead,
    Stack, Button, HStack,
} from "@chakra-ui/react";
import {
    FiHome,
} from "react-icons/fi";
import ApplicationCard from "../dashboard/ApplicationCard";


export default function OrgDashboard() {
    // @ts-ignore
    return (
        <Flex
            h="100vh"
            flexDir="row"
            overflow="hidden"
            maxW="2000px"
        >
            {/* Column 1 */}
            <Flex
                w="15%"
                flexDir="column"
                alignItems="center"
                backgroundColor="#020202"
                color="#fff"
            >
                <Flex
                    flexDir="column"
                    justifyConten="space-between"
                >
                    <Flex
                        flexDir="column"
                        as="nav"
                    >
                        <Heading
                            mt={50}
                            mb={100}
                            fontSize="4xl"
                            alignSelf="center"
                        >
                            Swipet
                        </Heading>
                        {/* Side Bar Items */}
                        <style global jsx>
                            {'\
                                a { \
                                    color: inherit; \
                                    text-decoration: none; \
                                }\
                                * {\
                                    text-decoration: none;\
                                }\
                                .active{\
                                    color: #fff;\
                                }\
                                .active-icon{\
                                    color: #b57295 !important;\
                                }\
                                .sidebar-items {\
                                color: gray;\
                                font-size: large;\
                                }\
                                .sidebar-items p {\
                                    margin-left: 1em;\
                                }\
                                .sidebar-items:hover p {\
                                color: #fff;\
                                }\
                                .sidebar-items:hover svg {\
                                color: #b57295;\
                                }\
                                .sidebar-items:not(:last-child) {\
                                margin-bottom: 1.5em;\
                                }\
                            '}
                        </style>
                        <Flex
                            flexDir="column"
                            align="flex-start"
                            justifyContent="center"
                        >
                            <Flex className="sidebar-items">
                                <Link>
                                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                                </Link>
                                <Link _hover={{textDecor: 'none'}}>
                                    <Text className="active">Home</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items">
                                <Link>
                                    <Icon as={FiHome} fontSize="2xl" />
                                </Link>
                                <Link _hover={{textDecor: 'none'}}>
                                    <Text>Post Animal</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items">
                                <Link>
                                    <Icon as={FiHome} fontSize="2xl" />
                                </Link>
                                <Link _hover={{textDecor: 'none'}}>
                                    <Text>Applications</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items">
                                <Link>
                                    <Icon as={FiHome} fontSize="2xl" />
                                </Link>
                                <Link _hover={{textDecor: 'none'}}>
                                    <Text>Settings</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            {/* Column 2 */}
            <Flex
                w="55%"
                p="3%"
                flexDir="column"
                overflow="hidden"
                minH="100vh"
            >
                <Heading fontWeight="bold" display={"inline-flex"}>
                    Clermont County Animal Shelter
                </Heading>
                <Text fontWeight={"normal"} mb={4}>Welcome back!</Text>
                <Text fontWeight={"bold"} display={"inline-flex"}>
                    Quick Stats
                </Text>
                <Flex
                w={"100%"}
                p={"3%"}
                pr={"1%"}
                minH={"20vh"}
                mt={4}
                display={"inline-flex"}
                >
                    <Flex
                        flexDir={"row"}
                        overflow={"auto"}
                        display={"column"}
                        flex={3}
                    >
                        <Text fontWeight={"normal"} mb={4} fontSize={"12"}>Total Applications</Text>
                        <Heading fontWeight={"bold"} display={"inline-flex"}>1,393</Heading>
                    </Flex>
                    <Flex
                        flexDir={"row"}
                        overflow={"auto"}
                        display={"column"}
                        flex={3}
                    >
                        <Text fontWeight={"normal"} mb={4} fontSize={"12"}>Pending Approval</Text>
                        <Heading fontWeight={"bold"} display={"inline-flex"} fontColor={"red"}>23</Heading>
                    </Flex>
                    <Flex
                        flexDir={"row"}
                        overflow={"auto"}
                        display={"column"}
                        flex={3}
                    >
                        <Text fontWeight={"normal"} mb={4} fontSize={"12"}>Adoptions This Month</Text>
                        <Heading fontWeight={"bold"} display={"inline-flex"}>39</Heading>
                    </Flex>
                    <Flex
                        flexDir={"row"}
                        overflow={"auto"}
                        display={"column"}
                        flex={3}
                    >
                        <Text fontWeight={"normal"} mb={4} fontSize={"12"}>Adoptions Last Month</Text>
                        <Heading fontWeight={"bold"} display={"inline-flex"}>21</Heading>
                    </Flex>
                </Flex>
                <HStack
                    w={"100%"}
                    h={"100%"}
                    display={"inline-flex"}
                    mt={6}
                >
                    <Text fontWeight={"bold"}>Applications</Text>
                            <Text fontWeight={"lighter"}>Animals</Text>
                </HStack>
                <Flex
                    w={"100%"}
                    h={"100%"}
                    display={"inline-flex"}
                    overflow={"auto"}
                >
                    <Stack
                        w={"100%"}
                        h={"100%"}
                        display={"inline-flex"}
                        overflow={"auto"}
                    >
                        <HStack>
                            <ApplicationCard />
                            <ApplicationCard />
                            <ApplicationCard />
                        </HStack>
                        <HStack>
                            <ApplicationCard />
                            <ApplicationCard />
                            <ApplicationCard />
                        </HStack>
                    </Stack>
                </Flex>
            </Flex>
            {/* Column 3 */}
            <Flex
                w="35%"
                bgColor="#F5F5F5"
                p="3%"
                flexDir="column"
                overflow="auto"
            >
            </Flex>

        </Flex>
    )
}