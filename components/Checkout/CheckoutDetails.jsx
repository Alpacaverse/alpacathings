import {
  Divider,
  Box,
  Radio,
  RadioGroup,
  Stack,
  Grid,
  GridItem,
  HStack,
  Button,
  Heading,
  Image,
  useColorModeValue,
  Text,
  Icon,
  Spacer,
  Center,
  Link,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const CheckoutDetails = (props) => {
  return (
    <>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Checkout
      </Text>
      <Divider borderWidth="1px" borderColor="gray.400" />
      <Stack direction={"row"} alignItems={"center"}>
        <Text fontSize={18} fontWeight={"bold"}>
          Address
        </Text>
        <Spacer />
        <Icon as={EditIcon}></Icon>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Box
          borderRadius={5}
          width="100vw" // Sets the width to 100% of the viewport width
          height="" // Sets the height to 100% of the viewport height
          bg="green.100" // Example background color
        >
          <Text
            color={useColorModeValue("black", "black")}
            padding={2}
            fontSize={"medium"}
          >
            Tower 2a Ave 5 Bangsar South 8 Jalan Kerinchi, Kuala Lumpur, Kuala
            Lumpur, 59200, Malaysia
          </Text>
        </Box>
      </Stack>
      <Divider borderWidth="1px" borderColor="gray.400" />

      <Text fontSize={"18"} fontWeight={"bold"}>
        Delivery Method
      </Text>
      <RadioGroup defaultValue="2">
        <Stack spacing={5} direction="row">
          <Radio colorScheme={"green"} value="1">
            Delivery
          </Radio>
          <Radio colorScheme="green" value="2">
            Pick Up
          </Radio>
        </Stack>
      </RadioGroup>

      <Divider borderWidth="1px" borderColor="gray.400" />

      <Text fontSize={18} fontWeight={"bold"}>
        Payment Method
      </Text>
      <RadioGroup defaultValue="2">
        <Stack spacing={5} direction="row">
          <HStack>
            <Box
              borderWidth={1}
              borderRadius="md"
              p={2}
              borderColor="gray.500"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Radio colorScheme="green" value="2">
                <Center>
                  <Image
                    src="./online-banking.jpg"
                    alt="Pick Up"
                    boxSize={12}
                    width={12}
                    marginRight={2}
                  />
                </Center>
                Online Banking
              </Radio>
            </Box>
            <Spacer></Spacer>
            <Box
              borderWidth={1}
              borderRadius="md"
              p={2}
              borderColor="gray.500"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Spacer></Spacer>
              <Radio colorScheme="green" value="1">
                <Center>
                  <Image
                    src="./credit.png"
                    alt="Alpaca Credits"
                    height={12}
                    width={12}
                    marginRight={2}
                  />
                </Center>
                Alpaca Points
              </Radio>
            </Box>
            <Spacer></Spacer>
            <Box
              borderWidth={1}
              borderRadius="md"
              p={2}
              borderColor="gray.500"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Spacer></Spacer>
              <Radio colorScheme="green" value="3">
                <Center>
                  <Image
                    src="./alpacaverse.png"
                    alt="Alpaca Points"
                    height={12}
                    width={12}
                    marginRight={2}
                  />
                </Center>
                Alpaca Points
              </Radio>
            </Box>
          </HStack>
        </Stack>
      </RadioGroup>
      <Divider borderWidth="1px" borderColor="gray.400" />

      <Text fontSize={"xl"} fontWeight={"bold"}>
        Shopping Bill
      </Text>
      <Heading as={"h4"} fontSize={"lg"} fontWeight={"semibold"}>
        <Grid templateColumns={"repeat(3,1fr)"}>
          <GridItem color={useColorModeValue("gray.500", "white")} colSpan={2}>
            1 x Rice Cooker
          </GridItem>
          <GridItem
            colSpan={1}
            textAlign={"right"}
            color={useColorModeValue("gray.500", "white")}
          >
            <Box as={"span"} fontSize={"xs"}>
              RM
            </Box>
            25.00
          </GridItem>
        </Grid>
      </Heading>
      <Divider
        borderWidth="2px"
        borderColor={useColorModeValue("gray.800", "white")}
        borderStyle="dashed"
      />
      <Heading as={"h"} fontSize={"xl"} fontWeight={"semibold"}>
        <Grid templateColumns={"repeat(3,1fr)"}>
          <GridItem color={useColorModeValue("black.500", "white")} colSpan={2}>
            Total Bill:
          </GridItem>
          <GridItem
            colSpan={1}
            textAlign={"right"}
            color={useColorModeValue("black.500", "white")}
          >
            <Box as={"span"} fontSize={"xs"}>
              RM
            </Box>
            25.00
          </GridItem>
        </Grid>
      </Heading>
      <Divider
        borderWidth="2px"
        borderColor={useColorModeValue("gray.800", "white")}
        borderStyle="dashed"
      />
      <Box></Box>

      <Button h={10} variant={"outline"} colorScheme={"green"} size="xl">
        <Link href="./transactionHistory"> Confirm Payment</Link>
      </Button>
    </>
  );
};

export default CheckoutDetails;
