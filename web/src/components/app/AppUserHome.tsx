import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  IoCheckmark,
  IoChevronBack,
  IoChevronForward,
  IoClose,
} from "react-icons/io5";
import Footer from "../home/HomeFooter";
import { AppNavBar } from "../home/HomeNavBar";
import { Wrapper, WrapperVariant } from "../Wrapper";
import { AnimalCard } from "./AnimalCard";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const AppUserHome: React.FC<LayoutProps> = ({ children, variant }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDislike] = useState(false);

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

  return (
    <>
      {/* buttons + columns */}
      <Flex justifyContent="space-between" flexDirection="row">
        <Flex
          as={Button}
          w="12.5vw"
          h="100vh"
          bgColor="red.100"
          _hover={{
            bgColor: "red.200",
          }}
          onClick={() => dislike()}
        >
          {disliked ? (
            <IoClose size="6rem" opacity={0.33} />
          ) : (
            <IoChevronBack size="6rem" opacity={0.33} />
          )}
        </Flex>

        <AnimalCard />

        <Flex
          as={Button}
          w="12.5vw"
          h="100vh"
          bgColor="blue.100"
          _hover={{
            bgColor: "blue.200",
          }}
          onClick={() => like()}
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
};
