import React from "react";
import { Select, Box, Text, Grid, GridItem } from "@chakra-ui/react";

const TabGroup = () => {
  return (
    <>
      <Box mb={5}>
        <Text fontWeight={"semibold"} fontSize={"lg"} textAlign={"end"} my={1}>
          Receivement Method
        </Text>
        <Grid templateColumns={"repeat(2,1fr)"}>
          <GridItem colSpan={1} colStart={2}>
            <Select
              placeholder="App Credit - default"
              size="xs"
              variant={"outline"}
              fontSize={"2xs"}
            >
              <option value="Online Banking">Online Banking</option>
              <option value="E-Wallets">E-Wallets</option>
            </Select>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default TabGroup;
