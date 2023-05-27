import React from "react";
import { Text, Box, Stack } from "@chakra-ui/react";

const WeeklyCompetition = () => {
  const today = new Date();
  const day = today.getDay();
  const diff = today.getDate() - day + (day === 0 ? -6 : 1);
  const startOfWeek = new Date(today.setDate(diff));

  return (
    <>
      <Box>
        <Box w={"100%"} h={"1px"} bg={"gray.300"} my={2} />
        <Box fontSize={"md"} textAlign={"center"} fontWeight={"bold"}>
          Weekly Competition For{" "}
          <Box as={"span"} color={"purple.400"}>
            {startOfWeek.toLocaleDateString()}
          </Box>
        </Box>
        <Box textAlign={"center"} px={5} py={2}>
          Recycle 5 glass bottles this week to gain 15 points!
        </Box>
        <Box w={"100%"} h={"1px"} bg={"gray.300"} my={2} />
      </Box>
    </>
  );
};

export default WeeklyCompetition;
