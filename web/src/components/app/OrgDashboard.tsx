import { Flex, Heading, Link, Icon, Text } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { HashLoader } from "react-spinners";
import { useMeOrgQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { useRouter } from "next/router";
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
      </>
    );
  } else {
    return <>big error</>;
  }
}
