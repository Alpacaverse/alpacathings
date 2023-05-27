import React from "react";
import {
  Stack,
  Box,
  Text,
  Center,
  Image,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import { useBadgeStore } from "../../store";

const PointsDisplay = (props) => {
  const [ranks, currentRankIndex] = useBadgeStore((state) => [
    state.ranks,
    state.currentRankIndex,
  ]);

  return (
    <>
      <Grid
        templateColumns={"repeat(4,1fr)"}
        fontSize={"sm"}
        h={20}
        alignItems={"center"}
      >
        <GridItem colSpan={3}>
          <Stack direction={"column"} spacing={0}>
            <Text>
              RM{" "}
              <Box as={"span"} fontWeight={"bold"} fontSize={"xl"}>
                {props.appCredit.toFixed(2)}
              </Box>
            </Text>
            <Text>
              <Box as={"span"} fontWeight={"bold"} fontSize={"xl"}>
                {props.alpacaPoints}{" "}
              </Box>
              AlpacaPoints
            </Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={1}>
          <Link href={"./leaderboard"}>
            <Center>
              <Image
                src={ranks[currentRankIndex].src}
                w={"70%"}
                h={"70%"}
                objectFit={"cover"}
              />
            </Center>
            <Text fontSize={"2xs"} textAlign={"center"}>
              {ranks[currentRankIndex].title}
            </Text>
          </Link>
        </GridItem>
      </Grid>
    </>
  );
};

export default PointsDisplay;
