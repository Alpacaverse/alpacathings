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
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { Carousel } from "@mantine/carousel";
import { Popover } from "@mantine/core";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "../../store/useCartStore";
import { MdDelete } from "react-icons/md";

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
  const [cart, addToCart, setCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
    state.setCart,
  ]);

  function handleCart(name) {
    // remove item from cart and setCart to new array
    const newCart = cart.filter((item) => item.name !== name);
    setCart(newCart);
    console.log(newCart);
  }

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
        <Popover
          width={300}
          position="bottom-end"
          withArrow
          shadow="md"
          offset={0}
        >
          <Popover.Target>
            <IconButton
              bg={"green.300"}
              aria-label="Add to cart"
              icon={<FaShoppingCart />}
            />
          </Popover.Target>
          <Popover.Dropdown>
            <Box>
              {cart.map((product, index) => (
                <Box key={product.name + index}>
                  <Grid
                    templateColumns={"repeat(4,1fr)"}
                    fontSize={"sm"}
                    alignItems={"center"}
                    gap={4}
                    my={4}
                  >
                    <GridItem colSpan={1}>
                      {" "}
                      <Image
                        src={product.image}
                        alt={product.name}
                        w={12}
                        h={12}
                        objectFit={"cover"}
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text color={useColorModeValue("black", "white")}>
                        {product.name}
                      </Text>
                      <Text
                        fontSize={"2xs"}
                        color={"green.200"}
                        fontWeight={"semibold"}
                      >
                        {product.type}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Text textAlign={"end"}>RM {product.price}</Text>
                      <Box
                        display={"flex"}
                        alignItems={"end"}
                        justifyContent={"end"}
                      >
                        <IconButton
                          my={1}
                          bg={"red.300"}
                          aria-label="Add to cart"
                          icon={<MdDelete />}
                          size={"xs"}
                          onClick={() => handleCart(product.name)}
                        />
                      </Box>
                    </GridItem>
                  </Grid>
                </Box>
              ))}
            </Box>
          </Popover.Dropdown>
        </Popover>
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
        withIndicators={false}
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
