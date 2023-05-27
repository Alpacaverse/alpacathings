import React from "react";
import CheckoutDetails from "./CheckoutDetails";
import { Text, Box, Stack } from "@chakra-ui/react";

const index = (props) => {
  return (
    <>
      <Stack direction={"column"} m={5} spacing={2}>
        <CheckoutDetails />
      </Stack>
    </>
  );
};

export default index;
