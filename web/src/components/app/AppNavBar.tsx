import { AddIcon, CloseIcon, HamburgerIcon, LockIcon } from "@chakra-ui/icons";
import {
	Box,
	Flex,
	Link,
	Avatar,
	Button,
	Menu,
	Image,
	MenuButton,
	MenuDivider,
	MenuItem,
	useColorModeValue,
	MenuList,
	IconButton,
	useDisclosure,
	HStack,
	Stack,
	useColorMode,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Input,
	VStack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useLogoutUserMutation, useMeUserQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import NextLink from "next/link";
import { IoArchiveOutline, IoBagHandleOutline, IoLogOutOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { Squash as Hamburger } from "hamburger-react";

interface AppNavBarProps {}

const Links = ["Home", "Applications", "Matches"];

const NavLink = ({ children }: { children: ReactNode }) => (		
	<NextLink href={children === "Home" ? `app` :`/${children.toString().toLowerCase()}`}>
		<Link
			fontWeight="semibold"
			borderBottom="1px solid transparent"
			_hover={{
				transitionDuration: "300ms",
				textDecoration: "none",
				borderBottom: "1px solid black",
			}}			
		>			
			{children}
		</Link>
	</NextLink>	
);

const Logo = (props: any) => {
	return (
		<NextLink href={"/"}>
			<Link
				rounded={"md"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Image h="8" src="https://swipet.s3.us-east-2.amazonaws.com/swipet-logo-black.png" />
			</Link>
		</NextLink>
	);
};

export const AppNavBar: React.FC<AppNavBarProps> = ({}) => {
	const router = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();
	const [logout, { loading: logoutFetching }] = useLogoutUserMutation();
	const apolloClient = useApolloClient();
	const { data, loading } = useMeUserQuery({
		skip: isServer(),
	});
	const { isOpen, onOpen, onClose } = useDisclosure();

	let userBody = null;

	// data is loading
	if (loading) {
		// user not logged in
	} else if (!data?.meUser) {
		userBody = null;
		// user is logged in
	} else {
		userBody = (
			<Flex alignItems={"center"}>
				Hey, {data.meUser.firstname}!
				<Menu>
					<MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"}>
						<Avatar name={data.meUser.firstname + " " + data.meUser.lastname} size={"sm"} src={data.meUser.avatarUrl} />
					</MenuButton>
					<MenuList>
						<MenuDivider />
						<MenuItem
							onClick={async () => {
								await logout();
								await apolloClient.resetStore();
								router.push("/");
							}}
							// isLoading={logoutFetching}
							// variant="link"
							// justifyContent={"space-between"}
						>
							Logout
							<IoLogOutOutline size={"1.25em"} />
						</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
		);
	}

	return (
		<>
			<Flex bg={"#fff"} px={"1rem"} zIndex={99} position="sticky" top={0} overflow="hidden" width="100vw" height="7vh" alignItems="center" justifyContent="space-between">
				<HStack spacing="2rem">
					<Hamburger toggled={isOpen} toggle={isOpen ? onClose : onOpen} size={20} />
					<Logo />
				</HStack>

				<HStack as={"nav"} spacing={4} fontWeight="normal" display={{ base: "none", md: "flex" }} color="black">					
					{Links.map((link) => (
						<NavLink key={link}>{link}</NavLink>
					))}
				</HStack>
			</Flex>

			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay />

				<DrawerContent>
					<DrawerCloseButton />

					<DrawerBody>
						<VStack spacing={8} alignItems="center" justifyContent="center">
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</VStack>
					</DrawerBody>

					<DrawerFooter>{userBody}</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};
