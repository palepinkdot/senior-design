import { Flex, Heading, Link, Icon, Text } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { HashLoader } from "react-spinners";
import { useMeOrgQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { useRouter } from "next/router";
import OrgFirstLoginCard from "./OrgFirstLoginCard";

export default function OrgDashboard() {
  const router = useRouter();
  const { data, loading } = useMeOrgQuery({
    skip: isServer(),
  });

  if (loading) {
    return <HashLoader />;
  } else if (data && data.meOrg.attributes == "new") {
    return <OrgFirstLoginCard />;
  } else if (data) {
    return (
      <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
        {/* Column 1 */}

        <Flex
          w="15%"
          flexDir="column"
          alignItems="center"
          backgroundColor="#020202"
          color="#fff"
        >
          <Flex flexDir="column" justifyConten="space-between">
            <Flex flexDir="column" as="nav">
              <Heading mt={50} mb={100} fontSize="4xl" alignSelf="center">
                Swipet
              </Heading>
              {/* Side Bar Items */}
              <style global jsx>
                {
                  "\
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
                            "
                }
              </style>
              <Flex flexDir="column" align="flex-start" justifyContent="center">
                <Flex className="sidebar-items">
                  <Link>
                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                  </Link>
                  <Link _hover={{ textDecor: "none" }}>
                    <Text className="active">Home</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items">
                  <Link>
                    <Icon as={FiHome} fontSize="2xl" />
                  </Link>
                  <Link _hover={{ textDecor: "none" }}>
                    <Text>Post Animal</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items">
                  <Link>
                    <Icon as={FiHome} fontSize="2xl" />
                  </Link>
                  <Link _hover={{ textDecor: "none" }}>
                    <Text>Applications</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items">
                  <Link>
                    <Icon as={FiHome} fontSize="2xl" />
                  </Link>
                  <Link _hover={{ textDecor: "none" }}>
                    <Text>Settings</Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Column 2 */}
        <Flex w="55%" p="3%" flexDir="column" overflow="auto" minH="100vh">
          <Heading fontWeight="bold" display={"inline-flex"}>
            {data.meOrg.orgName}
          </Heading>
          <Text fontWeight={"normal"} mb={4}>
            Welcome back!
          </Text>
        </Flex>
        {/* Column 3 */}
        <Flex
          w="35%"
          bgColor="#F5F5F5"
          p="3%"
          flexDir="column"
          overflow="auto"
        ></Flex>
      </Flex>
    );
  } else {
    return <>big error</>;
  }
}
