import { Flex, Heading, Link, Icon, Text, HStack, Stack } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { HashLoader } from "react-spinners";
import { useMeOrgQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { useRouter } from "next/router";
import ApplicationCard from "../dashboard/ApplicationCard";

import OrgFirstLoginCard from "./OrgFirstLoginCard";
import { OrgNavBar } from "./OrgNavBar";


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
      <>
        <OrgNavBar />
        <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
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
        {/* Column 2 */}
        <Flex w="55%" p="3%" flexDir="column" overflow="auto" minH="100vh">
          <Heading fontWeight="bold" display={"inline-flex"}>
            {data.meOrg.orgName}
          </Heading>
          <Text fontWeight={"normal"} mb={4}>
            Welcome back!
          </Text>
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
        ></Flex>
      </Flex>
    );
  } else {
    return <>big error</>;
  }
}
