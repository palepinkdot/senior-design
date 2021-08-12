import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  Circle,
  Stack,
  StackItem,
} from "@chakra-ui/react";
import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import { MdAddShoppingCart } from "react-icons/md";

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

const ProductAddToCart = ({ product }) => {
  return (
    <Flex
      mx={"16px"}
      flexGrow={0}
      flexShrink={0}
      flexBasis={"calc(33.333% - 32px)"}
      boxSizing={"border-box"}
      mb={"40px"}
    >
      <Flex
        bg={useColorModeValue("gray.100", "gray.800")}
        width={"100%"}
        flexDirection={"column"}
        flexWrap={"nowrap"}
        alignContent={"flex-start"}
        alignItems={"stretch"}
        position={"relative"}
        boxSizing={"border-box"}
        textAlign={"left"}
        m={0}
        rounded="lg"
        shadow="lg"
        minW={"200px"}
      >
        <Image
          src={`${product.imageUrl}`}
          alt={`Picture of ${product.name}`}
          roundedTop="lg"
        />

        <Box p="6" maxW={"auto"}>
          <Flex mt="1" justifyContent={"space-between"}>
            <Stack
              spacing={0}
              fontSize="md"
              color={useColorModeValue("gray.800", "white")}
            >
              <StackItem>
                <Text fontSize="md" fontWeight="semibold" isTruncated>
                  {product.name}
                </Text>
              </StackItem>

              <StackItem>${product.price.toFixed(2)}</StackItem>
            </Stack>

            <Tooltip
              label="Add to cart"
              color={useColorModeValue("gray.800", "gray.100")}
              bg={useColorModeValue("gray.100", "gray.800")}
              placement={"top"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={MdAddShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProductAddToCart;
