import React from "react";
import {
  Box,
  Stack,
  Image,
  Text,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import { MdQrCode, MdShoppingCart, MdQuestionAnswer } from "react-icons/md";

const Card = (props) => {
  return (
    <>
      <Box
        h={20}
        w={20}
        borderRadius={"md"}
        shadow={"lg"}
        bg={"green.200"}
        color={"gray.900"}
      >
        <Stack direction={"column"} py={5} alignItems={"center"}>
          <Box>{props.icon}</Box>
          <Box>
            <Text fontWeight={"semibold"} fontSize={"xs"} textAlign={"center"}>
              {props.title}
            </Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

const CardButton = () => {
  return (
    <>
      <Grid
        templateColumns={"repeat(3,1fr)"}
        gap={4}
        alignSelf={"center"}
        py={5}
      >
        <GridItem>
          <Link href={"./vendingQR"}>
            <Card icon={<MdQrCode />} title={"Vending QR"} />
          </Link>
        </GridItem>
        <GridItem>
          <Link href={"./marketplace"}>
            <Card icon={<MdShoppingCart />} title={"Marketplace"} />
          </Link>
        </GridItem>
        <GridItem>
          <Link href={"./faq"}>
            <Card icon={<MdQuestionAnswer />} title={"FAQ"} />
          </Link>
        </GridItem>
      </Grid>
    </>
  );
};

export default CardButton;
