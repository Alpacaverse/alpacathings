import React from "react";
import {
  Button,
  Box,
  Text,
  Stack,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { MdOutlineWallet } from "react-icons/md";
import { ChevronRightIcon } from "@chakra-ui/icons";

const WithdrawHistory = () => {
  return (
    <>
      <Grid templateColumns={"repeat(2,1fr)"} fontSize={"xs"} gap={4} mb={5}>
        <GridItem>
          <Button
            rightIcon={<MdOutlineWallet />}
            colorScheme="twitter"
            variant="outline"
            w={"100%"}
            size={"xs"}
          >
            Withdraw
          </Button>
        </GridItem>
        <GridItem alignSelf={"center"}>
          <Center>
            <Stack direction={"row"} spacing={2} fontWeight={"semibold"}>
              <Box>
                <Text>Transaction History</Text>
              </Box>
              <Box>
                <ChevronRightIcon />
              </Box>
            </Stack>
          </Center>
        </GridItem>
      </Grid>
    </>
  );
};

export default WithdrawHistory;
