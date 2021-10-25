import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  IoCheckmark,
  IoChevronBack,
  IoChevronForward,
  IoClose,
} from "react-icons/io5";
import { useMeUserQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { useIsUser } from "../../utils/useIsUser";
import { Wrapper, WrapperVariant } from "../Wrapper";
import { AnimalCard } from "./AnimalCard";
import { AppNavBar } from "./AppNavBar";

import { HashLoader } from "react-spinners";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const AppUserHome: React.FC<LayoutProps> = ({ children, variant }) => {
  useIsUser();

  const [liked, setLiked] = useState(false);
  const [disliked, setDislike] = useState(false);
  const { data, loading } = useMeUserQuery({
    skip: isServer(),
  });

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
  } else if (data) {
    return (
      <>
        <AppNavBar />
        {/* buttons + columns */}
        <Flex justifyContent="space-between" flexDirection="row">
          <Flex
            as={Button}
            w="12.5vw"
            h="93vh"
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
          {data.meUser.firstLogin
            ? alert("This is your first login")
            : alert("This is NOT your first login")}
          <Flex
            as={Button}
            w="12.5vw"
            h="93vh"
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
  } else {
    return (
      <>
        <HashLoader></HashLoader>something went wrong
      </>
    );
  }
};
