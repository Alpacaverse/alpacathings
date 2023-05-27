import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Grid,
  GridItem,
  Select,
} from "@chakra-ui/react";
import { useTransactionHistoryStore } from "../../store/useTransactionHistoryStore";

const index = () => {
  const transactions = useTransactionHistoryStore(
    (state) => state.transactions
  );
  return (
    <>
      <Stack direction={"column"} m={5} spacing={2}>
        <Box>
          <Stack direction="row" spacing={2}>
            <Heading as={"h3"} fontWeight={"bold"} fontSize={"xl"}>
              Transaction History
            </Heading>
            <Select
              placeholder="Date Descending"
              size={"sm"}
              w={"60%"}
              fontSize={"sm"}
            >
              <option value="Date Ascending">Date Ascending</option>
              <option value="Cash In">Cash In</option>
              <option value="Cash Out">Cash Out</option>
            </Select>
          </Stack>
        </Box>
        <Box>
          <Box w={"69%"} h={"1px"} bg={"gray.300"} my={2} />
        </Box>
        <Box>
          {transactions.map((transaction) => (
            <TransactionHistoryItem
              key={transaction.key}
              name={transaction.name}
              category={transaction.category}
              date={transaction.date}
              status={transaction.status}
              colour={transaction.colour}
              value={transaction.value}
            />
          ))}
        </Box>
      </Stack>
    </>
  );
};

const TransactionHistoryItem = (props) => {
  return (
    <>
      <Box my={6} mx={1} fontSize={"sm"}>
        <Heading as={"h4"} fontSize={"xl"} fontWeight={"semibold"}>
          <Grid templateColumns={"repeat(3,1fr)"}>
            <GridItem colSpan={2}>{props.name}</GridItem>
            {props.value && (
              <GridItem
                colSpan={1}
                textAlign={"right"}
                color={useColorModeValue(props.colour[0], [props.colour[1]])}
              >
                <Box as={"span"} fontSize={"xs"}>
                  RM
                </Box>
                {props.value.toFixed(2)}
              </GridItem>
            )}
          </Grid>
        </Heading>
        <Text>Category: {props.category}</Text>
        <Text color={useColorModeValue("gray.500", "gray.500")}>
          {props.date}
        </Text>
        <Text
          color={useColorModeValue(props.colour[0], [props.colour[1]])}
          fontWeight={"semibold"}
        >
          {props.status}
        </Text>
      </Box>
    </>
  );
};

export default index;
