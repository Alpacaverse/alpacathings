import React from "react";
import { Box, Progress, Container, Text } from "@chakra-ui/react";
import { useBadgeStore } from "../../store";

const PointsProgressBar = () => {
  const [ranks, currentPoints, currentRankIndex] = useBadgeStore((state) => [
    state.ranks,
    state.currentPoints,
    state.currentRankIndex,
  ]);

  return (
    <>
      <Container mb={10}>
        <Progress hasStripe value={64} colorScheme={"purple"} />
        <Box textAlign={"center"} my={2} fontWeight={"semibold"}>
          <Box fontSize={"sm"}>
            Current Points:{" "}
            <Box as={"span"} color="green.600" fontWeight={"bold"}>
              {currentPoints}
            </Box>
          </Box>
          <Box fontSize={"sm"}>
            Points Needed To Next Badge:{" "}
            <Box as={"span"} color="purple.400" fontWeight={"bold"}>
              {ranks[currentRankIndex + 1].pointCriteria - currentPoints}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PointsProgressBar;
