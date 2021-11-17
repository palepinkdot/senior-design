import * as React from "react";
import styled, { css } from "styled-components";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons"
import { Icon, createIcon, SimpleGrid, GridItem } from "@chakra-ui/react"

const SCarouselWrapper = styled.div`
  display: flex; 
`;

interface ICarouselSlide {
  active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;

interface ICarouselProps {
  currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${props =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;

interface IProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <div>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>
      </SCarouselWrapper>
      <SimpleGrid columns={7} width="full" paddingTop={4}>
        <GridItem colSpan={1}>
          <button
          onClick={() => {
            setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
          }}
        >
            <ArrowBackIcon w={10} h={10} color="red.300" />
          </button>
        </GridItem>
        <GridItem colSpan={5} textAlign="center">
        <Icon viewBox="0 0 200 200" color="red.300">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Icon viewBox="0 0 200 200" color="red.300">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Icon viewBox="0 0 200 200" color="red.300">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        </GridItem>
        <GridItem colSpan={1} textAlign="right">
          <button
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
          }}
        >
            <ArrowForwardIcon w={10} h={10} color="red.300" />
          </button>
        </GridItem>
      </SimpleGrid>
    </div>
  );
};

export default Carousel;
