import React from "react";
import {
  Box,
  Stack,
  Select,
  Text,
  IconButton,
  Spacer,
  Heading,
  useColorModeValue,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { Carousel } from "@mantine/carousel";
import { FaShoppingCart, FaMoneyBill } from "react-icons/fa";
const apparelData = [
  {
    con: "New",
    imageURL: "/sweat-shirt.jpg",
    name: "Neck Sweatshirt",
    price: 15.0,
    description: " Unisex Crewneck Sweatshirt, classic loose fit  ( M Size )",
  },
  {
    con: "Used",
    imageURL: "/swimming-cloth.jpg",
    name: "Swimming Cloth",
    price: 20.0,
    description: "Long Sleeve and sun protection ( L Size )",
  },
];
const electronicsData = [
  {
    con: "Used",
    imageURL: "/cooker.jpg",
    name: "Rice Cooker",
    price: 25.0,
    description: "Buy me if you want to be slim! ( 2.5L )",
  },
  {
    con: "Used",
    imageURL: "/fridges.jpg",
    name: "Mini Refrigerators",
    price: 50.0,
    description: "Small size refrigerator ( 1.5L ) but powerful",
  },
];

const Sort = (props) => {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"}>
        <Text fontSize={18} fontWeight={"bold"}>
          Welcome To{" "}
          <Box as={"span"} color={useColorModeValue("green.600", "green.200")}>
            Alpaca Marketplace
          </Box>
        </Text>
        <Spacer />
        <IconButton
          bg={"green.300"}
          aria-label="Add to cart"
          icon={<FaShoppingCart />}
        />
      </Stack>

      <Stack direction={"row"} py={5} alignItems={"center"}>
        <Stack direction={"column"} fontWeight={"semibold"}>
          <Text>Sort by Category</Text>
          <Select borderWidth={3} placeholder="Select All" width={"40"}>
            <option value="option1">Apparel</option>
            <option value="option2">Home Appliances</option>
            <option value="option3">Gadget</option>
          </Select>
        </Stack>
        <Spacer />
        <Stack direction={"column"} fontWeight={"semibold"}>
          <Text>Sort by Condition</Text>
          <Select borderWidth={3} placeholder="Select All" width={"40"}>
            <option value="option1">New</option>
            <option value="option2">Used</option>
          </Select>
        </Stack>
        <Box>
          <Text fontWeight={"semibold"} fontSize={"xs"} textAlign={"center"}>
            {props.title}
          </Text>
        </Box>
      </Stack>
      <Heading
        size="md"
        my={6}
        color={useColorModeValue("blue.400", "blue.200")}
      >
        Fashion{" "}
        <Box as={"span"} color={useColorModeValue("black", "white")}>
          Apparel
        </Box>{" "}
      </Heading>
      <Carousel
        mb={10}
        align={"start"}
        slideSize={"90%"}
        withControls={false}
        withIndicators={false}
        height="100%"
        sx={{ flex: 1 }}
      >
        {apparelData.map((product, index) => (
          <ProductCard
            key={product.imageURL + index}
            con={product.con}
            isRecommended={product.isRecommended}
            imageURL={product.imageURL}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </Carousel>
      <Box mt={10}> </Box>
      <Heading
        size="md"
        my={6}
        color={useColorModeValue("blue.400", "blue.200")}
      >
        Home{" "}
        <Box as={"span"} color={useColorModeValue("black", "white")}>
          Appliances
        </Box>{" "}
      </Heading>
      <Carousel
        mt={10}
        align={"start"}
        slideSize={"90%"}
        withControls={false}
        withIndicators
        height="100%"
        sx={{ flex: 1 }}
      >
        {electronicsData.map((product, index) => (
          <ProductCard
            key={product.imageURL + index}
            con={product.con}
            isRecommended={product.isRecommended}
            imageURL={product.imageURL}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </Carousel>
    </>
  );
};

export default Sort;
