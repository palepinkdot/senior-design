import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import {
  IoCheckmark,
  IoChevronBack,
  IoChevronForward,
  IoClose,
} from "react-icons/io5";
import { useMeUserQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { WrapperVariant } from "../Wrapper";
import { AnimalCard } from "./AnimalCard";
import { AppNavBar } from "./AppNavBar";

import { HashLoader } from "react-spinners";

import { useRouter } from "next/router";

import TinderCard from "react-tinder-card";

interface LayoutProps {
  variant?: WrapperVariant;
}

// const db = [
//   {
//     name: "Richard Hendricks",
//     url: "./img/richard.jpg",
//   },
//   {
//     name: "Erlich Bachman",
//     url: "./img/erlich.jpg",
//   },
//   {
//     name: "Monica Hall",
//     url: "./img/monica.jpg",
//   },
//   {
//     name: "Jared Dunn",
//     url: "./img/jared.jpg",
//   },
//   {
//     name: "Dinesh Chugtai",
//     url: "./img/dinesh.jpg",
//   },
// ];

export const AppUserHome: React.FC<LayoutProps> = ({ children, variant }) => {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [disliked, setDislike] = useState(false);
  const { data, loading } = useMeUserQuery({
    skip: isServer(),
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

  if (loading) {
    return <HashLoader />;
  } else if (data && data.meUser.attributes == "new") {
    return <AdoFirstLoginCard />;
  } else if (data) {
    return (
      <>
        <AppNavBar />
        {/* buttons + columns */}
        <Flex
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
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
            {disliked ? (
              <IoClose size="6rem" opacity={0.33} />
            ) : (
              <IoChevronBack size="6rem" opacity={0.33} />
            )}
          </Flex>
          <TinderCard
            flickOnSwipe={true}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
            <AnimalCard />
          </TinderCard>

          <AnimalCard />


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
            {liked ? (
              <IoCheckmark size="6rem" opacity={0.33} />
            ) : (
              <IoChevronForward size="6rem" opacity={0.33} />
            )}
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
