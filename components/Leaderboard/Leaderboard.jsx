import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Text,
  Image,
  Center,
  Stack,
  Container,
  Heading,
} from "@chakra-ui/react";
import { useLeaderboardStore } from "../../store";

const Row = (props) => {
  return (
    <>
      <Grid templateColumns={"repeat(5,1fr)"} alignItems={"center"} my={2}>
        <GridItem colSpan={1}>
          <Text textAlign={"start"}>{props.rank}</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Image src={props.image} alt={"profile"} w={10} h={10} />
        </GridItem>
        <GridItem colSpan={2}>
          <Text textAlign={"start"}>{props.name}</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Text textAlign={"start"}>
            <Box
              as={"span"}
              fontWeight={"bold"}
              color={props.rank <= 3 ? "purple.400" : "gray.900"}
            >
              {props.points}{" "}
            </Box>
            Points
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

const Leaderboard = () => {
  const users = useLeaderboardStore((state) => state.users);
  return (
    <>
      <Container mb={10}>
        <Box my={4}>
          <Heading fontWeight={"bold"} fontSize={"2xl"}>
            Leaderboard
          </Heading>
        </Box>
        <Stack direction={"column"} spacing={2}>
          {users.map((user) => (
            <Row
              key={user.key}
              rank={user.rank}
              image={user.image}
              points={user.points}
              name={user.name}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default Leaderboard;
