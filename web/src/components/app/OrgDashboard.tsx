import { Flex, Heading, Link, Icon, Text, HStack, Stack, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { HashLoader } from "react-spinners";
import { useAnimalsPerShelterQuery, useAnimalsQuery, useApplicationPerShelterQuery, useMeOrgQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { useRouter } from "next/router";
import ApplicationCard from "../dashboard/ApplicationCard";
import OrgFirstLoginCard from "./OrgFirstLoginCard";
import { OrgNavBar } from "./OrgNavBar";
import { TableAnimals } from "../dashboard/TableAnimals";
import { ShelterTableApplications } from "../dashboard/ShelterTableApplications";
import HomeFooter from "../home/HomeFooter";
import { animal } from "faker";

export default function OrgDashboard() {
	const router = useRouter();
	const { data : data, loading : loading, error: error } = useMeOrgQuery({
		skip: isServer(),
	});	
	const {
		data: animalData,
		error: animalError,
		loading: animalLoading,
		fetchMore,
		variables,
	} = useAnimalsQuery({
		variables: {
			limit: 15,
			cursor: null,
		},
		notifyOnNetworkStatusChange: true,
	});

  const { data: animalsPerShelter, loading: perShelterLoading, error: perShelterError } = useAnimalsPerShelterQuery({
    variables: {
      orgId: data?.meOrg?.id
    },
  });
	const animalIds = !perShelterLoading ? animalsPerShelter?.animalsPerShelter.animals.map(animal => animal.id) : [];

	const {data: shelterApps, loading: shelterAppsLoading, error: shelterAppsError} = useApplicationPerShelterQuery({
		variables: {
			limit: 100,
			animalIds: animalIds
		}
	});
	console.log("Thissssss");console.log(new Date().getUTCMonth());

	if (loading) {
		return <HashLoader />;
	} else if (data && data.meOrg?.attributes == "new") {
		return <OrgFirstLoginCard />;
	} else if (data) {
		return (
			<>
				<OrgNavBar />
				{/* Column 2 */}
				<Flex w="100%" p="3%" flexDir="column" overflow="auto" minH="100vh" height={"100%"}>
					<Heading fontWeight="bold" display={"inline-flex"}>
						{data.meOrg.orgName}
					</Heading>
					<Text fontWeight={"normal"} mb={4}>
						Welcome back!
					</Text>
					<Text fontWeight={"bold"} display={"inline-flex"}>
						Quick Stats
					</Text>
					<Flex w={"100%"} p={"3%"} pr={"1%"} minH={"20vh"} mt={4} display={"inline-flex"} overflow={"auto"}>
						<Flex flexDir={"row"} overflow={"auto"} display={"column"} flex={3}>
							<Text fontWeight={"normal"} mb={4} fontSize={"12"}>
								Total Applications
							</Text>
							<Heading fontWeight={"bold"} display={"inline-flex"}>
								{!shelterAppsLoading ? shelterApps?.applicationPerShelter.applications.length : "Loading..."}
							</Heading>
						</Flex>
						<Flex flexDir={"row"} overflow={"auto"} display={"column"} flex={3}>
							<Text fontWeight={"normal"} mb={4} fontSize={"12"}>
								Pending Approval
							</Text>
							<Heading fontWeight={"bold"} display={"inline-flex"} fontColor={"red"}>
							{!shelterAppsLoading ? shelterApps?.applicationPerShelter.applications.filter(app => app.status == "Waiting").length : "Loading..."}
							</Heading>
						</Flex>
						<Flex flexDir={"row"} overflow={"auto"} display={"column"} flex={3}>
							<Text fontWeight={"normal"} mb={4} fontSize={"12"}>
								Adoptions This Month
							</Text>
							<Heading fontWeight={"bold"} display={"inline-flex"}>
							{!shelterAppsLoading ? shelterApps?.applicationPerShelter.applications.filter(app => app.status == "Accepted" && new Date(parseInt(app.createdAt)).getMonth() == new Date().getMonth()).length : "Loading..."}
							</Heading>
						</Flex>
						<Flex flexDir={"row"} overflow={"auto"} display={"column"} flex={3}>
							<Text fontWeight={"normal"} mb={4} fontSize={"12"}>
								Adoptions Last Month
							</Text>
							<Heading fontWeight={"bold"} display={"inline-flex"}>
							{!shelterAppsLoading ? shelterApps?.applicationPerShelter.applications.filter(app => app.status == "Accepted" && new Date(parseInt(app.createdAt)).getMonth() == (new Date().getMonth()-1)).length : "Loading..."}
							</Heading>
						</Flex>
					</Flex>
					<Tabs variant="soft-rounded" colorScheme="red">
						<TabList>
							<Tab>Application</Tab>
							<Tab>Animals</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<ShelterTableApplications applications={!shelterAppsLoading ? shelterApps?.applicationPerShelter.applications.slice(0, 3) : null}/>
							</TabPanel>
							<TabPanel>
								<TableAnimals animals={!perShelterLoading ? animalsPerShelter?.animalsPerShelter.animals : null}/>
							</TabPanel>
						</TabPanels>
					</Tabs>
					<Flex w={"100%"} h={"100%"} display={"inline-flex"} overflow={"auto"}>
						<Stack w={"100%"} h={"100%"} display={"inline-flex"} overflow={"auto"}>
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
			</>
		);
	} else {
		return <>big error</>;
	}
}
