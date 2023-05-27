import React from "react";
import Sort from "./Sort";
import { Text, Box, Stack } from "@chakra-ui/react";

const index = (props) => {
  return (
    <>
      <Stack direction={"column"} m={5} spacing={2}>
        <Sort />
      </Stack>
    </>
  );
};

export default index;
