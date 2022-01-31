import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { IoCheckmark, IoChevronBack, IoChevronForward, IoClose, IoOptions } from "react-icons/io5";
import { useAnimalsQuery, useCreateAnimalMutation, useCreateMatchMutation, useMeUserQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { WrapperVariant } from "../Wrapper";
import { AnimalCard } from "./AnimalCard";
import { AppNavBar } from "./AppNavBar";

import { HashLoader } from "react-spinners";

import { useRouter } from "next/router";

import TinderCard from "react-tinder-card";
import AdoFirstLoginCard from "./AdoFirstLoginCard";
import { animal } from "faker";

interface LayoutProps {
	variant?: WrapperVariant;
}
export const AppUserHome: React.FC<LayoutProps> = ({ children, variant }) => {
	const router = useRouter();
	const [liked, setLiked] = useState(false);
	const [disliked, setDislike] = useState(false);
	const { data: meData, loading: meLoading } = useMeUserQuery({
		skip: isServer(),
	});
	const [match] = useCreateMatchMutation();
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

	const onSwipe = (direction) => {
		console.log("You swiped: " + direction);
		if (direction == "right") {
			like();
		} else if (direction == "left") {
			dislike();
		}
	};

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + " left the screen");
		resetLike();
	};

	function like() {
		setLiked(true);
		setDislike(false);
	}

	function dislike() {
		setLiked(false);
		setDislike(true);
	}

	function resetLike() {
		setLiked(false);
		setDislike(false);
	}

	function matchUser(userId: string, animalId: string) {
		match({
			variables: {
				userId: userId,
				animalId: animalId,
			},
		});
	}

	if (meLoading || animalLoading) {
		return <HashLoader />;
	} else if (meData && meData.meUser.attributes == "new") {
		return <AdoFirstLoginCard />;
	} else if (meData) {
		return (
			<>
				<AppNavBar />
				{/* buttons + columns */}
				<Flex justifyContent="space-between" flexDirection="row" alignItems="center">
					<Flex
						as={Button}
						w="12.5vw"
						h="93vh"
						bgColor="red.100"
						_hover={{
							bgColor: "red.200",
						}}
						onClick={() => dislike()}
						zIndex="10"
					>
						{disliked ? <IoClose size="6rem" opacity={0.33} /> : <IoChevronBack size="6rem" opacity={0.33} />}
					</Flex>
					{/* width: 90vw; max-width: 260px; height: 300px; */}
					<Box justifyContent="center" alignItems="center" width="80vw" overflow="hidden" h="90vh">
						{animalData!.animals.animals.map((e) => {
							console.log(e);
							return (
								<TinderCard
									key={e.id}
									flickOnSwipe={true}
									onSwipe={() => {
										onSwipe;
										matchUser(meData.meUser.id, e.id);
									}}
									onCardLeftScreen={() => onCardLeftScreen("fooBar")}
									preventSwipe={["up", "down"]}
								>
									<AnimalCard data={e} />
								</TinderCard>
							);
						})}
					</Box>
					<Flex
						as={Button}
						w="12.5vw"
						h="93vh"
						bgColor="blue.100"
						_hover={{
							bgColor: "blue.200",
						}}
						onClick={() => like()}
						zIndex="10"
					>
						{liked ? <IoCheckmark size="6rem" opacity={0.33} /> : <IoChevronForward size="6rem" opacity={0.33} />}
					</Flex>
				</Flex>
			</>
		);
	} else {
		return (
			<>
				<HashLoader></HashLoader>
			</>
		);
	}
};
