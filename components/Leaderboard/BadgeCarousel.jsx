import React from "react";
import { Carousel } from "@mantine/carousel";
import { Image, Box, Text, Center, Grid, GridItem } from "@chakra-ui/react";
import { useBadgeStore } from "../../store";
import { MdCheckCircle } from "react-icons/md";

const Badge = (props) => {
  return (
    <>
      <Box w={20} h={20} p={2}>
        <Grid gap={2} templateRows={"repeat(4,1fr)"}>
          <GridItem>
            <Image
              src={props.src}
              alt={props.alt}
              objectFit={"cover"}
              w={"100%"}
              h={"100%"}
            />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"} textAlign={"center"}>
              {props.title}
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontSize={"sm"}
              fontWeight={"bold"}
              textAlign={"center"}
              color={"purple.400"}
            >
              {props.pointCriteria}
            </Text>
          </GridItem>
          <GridItem>
            {props.isAchieved && (
              <Center>
                <MdCheckCircle color="green" size={20} />
              </Center>
            )}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

const BadgeCarousel = () => {
  const ranks = useBadgeStore((state) => state.ranks);
  return (
    <>
      <Box my={5}>
        <Carousel
          height={250}
          slideSize="25%"
          slideGap="md"
          align="center"
          slidesToScroll={3}
          dragFree
          withControls={false}
        >
          {ranks.map((badge) => (
            <Carousel.Slide key={badge.key}>
              <Badge
                src={badge.src}
                alt={badge.alt}
                title={badge.title}
                pointCriteria={badge.pointCriteria}
                isAchieved={badge.isAchieved}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default BadgeCarousel;
