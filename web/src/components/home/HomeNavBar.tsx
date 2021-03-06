import { AddIcon, CloseIcon, HamburgerIcon, LockIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Avatar, Button, Menu, Image, MenuButton, MenuDivider, MenuItem, MenuList, IconButton, useDisclosure, HStack, Stack, useColorMode } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import NextLink from "next/link";
import { IoArchiveOutline, IoBagHandleOutline, IoLogOutOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

interface HomeNavBarProps {}

const Links = ["Shelters", "Contact", "Shop"];

const NavLink = ({ children }: { children: ReactNode }) => (
	<NextLink href={`/${children.toString().toLowerCase()}`}>
		<Link
			fontWeight="semibold"
			px={2}
			py={1}
			rounded={"md"}
			_hover={{
				textDecoration: "none",
				bg: "red.300",
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
				<Image h="8" src="https://swipet.s3.us-east-2.amazonaws.com/swipet-logo-white.png" />
			</Link>
		</NextLink>
	);
};

export const HomeNavBarProps: React.FC<HomeNavBarProps> = ({}) => {
	const router = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();
	const apolloClient = useApolloClient();
	const { isOpen, onOpen, onClose } = useDisclosure();

	let userBody = null;

	return (
		<Box
			bg={"rbga(0, 0, 0, 0.0)"}
			px={8}
			zIndex={99}
			position="sticky"
			top={0}
			/* boxShadow={"lg"} */
			bgGradient="linear(to-b, gray.500, rgba(0,0,0,0))"
			display={"flex"}
			flexDirection={"row"}
			justifyContent={"space-between"}
		>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<HStack spacing={8} alignItems={"center"}>
					<Box>
						<Logo />
					</Box>

					<HStack as={"nav"} spacing={4} fontWeight="normal" display={{ base: "none", md: "flex" }} color="white">
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</HStack>
				</HStack>

				<IconButton size={"md"} bgColor="white" icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />

				<Flex display={{ base: "none", md: "flex" }}>{userBody}</Flex>
			</Flex>

			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<HStack spacing={8} alignItems={"center"}>
					<HStack as={"nav"} spacing={4} fontWeight="normal" display={{ base: "none", md: "flex" }} color="white">
						<p>Already a user?</p>
						<Link href="/app/org/login">Shelters</Link>
						<Link href="/app/ado/login">Adopters</Link>
					</HStack>
				</HStack>

				<IconButton size={"md"} bgColor="white" icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />

				<Flex display={{ base: "none", md: "flex" }}>{userBody}</Flex>
			</Flex>
			{isOpen ? (
				<Box bgColor="white" pb={4} display={{ md: "none" }}>
					<Stack as={"nav"} spacing={4}>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
						<Flex justifyContent={"flex-end"}>{userBody}</Flex>
					</Stack>
				</Box>
			) : null}
		</Box>
	); //
};
