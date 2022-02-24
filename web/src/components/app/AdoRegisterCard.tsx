import { Flex, Box, FormControl, Stack, Link, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";

import NextLink from "next/link";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MeUserDocument, MeUserQuery, useRegisterUserMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../InputField";

export default function AdoRegisterCard() {
  const router = useRouter();
  const [register] = useRegisterUserMutation();

	return (
		<>
			<Formik
				initialValues={{
					username: "",
					password: "",
					verifypassword: "",
					firstname: "",
					lastname: "",
					email: "",
					phone: "",
					zip: "",
				}}
				onSubmit={async (values, { setErrors }) => {
					const response = await register({
						variables: { options: values },
						update: (cache, { data }) => {
							cache.writeQuery<MeUserQuery>({
								query: MeUserDocument,
								data: {
									__typename: "Query",
									meUser: data?.registerUser.user,
								},
							});
						},
					});
					if (response.data?.registerUser.errors) {
						setErrors(toErrorMap(response.data.registerUser.errors));
					} else if (response.data?.registerUser.user) {
						// worked
						router.push("/app/");
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Flex minH={"100vh"} align={"center"} justify={"center"} bg="red.100">
							<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
								<Stack align={"center"}>
									<Heading fontSize={"3xl"}>Create your account</Heading>
									<Text fontSize={"lg"} color={"gray.600"}>
										to enjoy all of our member <Link color={"blue.400"}>features</Link> ✌️
									</Text>
								</Stack>
								<Box rounded={"lg"} bg="white" boxShadow={"lg"} p={8}>
									<Stack spacing={4}>
										<Flex justifyContent={"space-between"}>
											<FormControl pr={1.5} id="firstname">
												<InputField name="firstname" placeholder="First Name" label="First Name" />
											</FormControl>
											<FormControl pl={1.5} id="lastname">
												<InputField name="lastname" placeholder="Last Name" label="Last Name" />
											</FormControl>
										</Flex>

										<FormControl id="username">
											<InputField name="username" placeholder="Username" label="Username" />
										</FormControl>

										<FormControl id="email">
											<InputField name="email" placeholder="Email" label="Email" />
										</FormControl>

										<FormControl id="phone">
											<InputField name="phone" placeholder="513-555-1234" label="Phone Number" />
										</FormControl>

										<FormControl id="zip">
											<InputField name="zip" placeholder="45219" label="Zip Code" />
										</FormControl>

										<Flex justifyContent={"space-between"}>
											<FormControl pr={1.5} id="password">
												<InputField name="password" placeholder="Password" label="Password" type="password" />
											</FormControl>
											<FormControl pl={1.5} id="verifypassword">
												<InputField name="verifypassword" placeholder="Verify Password" label="Verify Password" type="password" />
											</FormControl>
										</Flex>

										<Stack spacing={10}>
											<Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"flex-end"}>
												<NextLink href="/app/ado/login">
													<Link color={"grey.400"}>already have one?</Link>
												</NextLink>
											</Stack>
											<Button
												type="submit"
												isLoading={isSubmitting}
												bg={"red.200"}
												color={"white"}
												_hover={{
													bg: "blue.200",
												}}
											>
												Register
											</Button>
										</Stack>
									</Stack>
								</Box>
							</Stack>
						</Flex>
					</Form>
				)}
			</Formik>
		</>
	);
}
