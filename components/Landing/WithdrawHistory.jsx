import React from "react";
import {
  Button,
  Box,
  Text,
  Stack,
  Grid,
  GridItem,
  Center,
  Link,
} from "@chakra-ui/react";
import { MdOutlineWallet } from "react-icons/md";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Withdrawal from "../Modals/Withdrawal";

const WithdrawHistory = () => {
  return (
    <>
      <Grid templateColumns={"repeat(2,1fr)"} fontSize={"xs"} gap={2} mb={5}>
        <GridItem>
          <Withdrawal />
        </GridItem>
        <Link href="./transactionHistory">
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
        </Link>
      </Grid>
    </>
  );
};

export default WithdrawHistory;
