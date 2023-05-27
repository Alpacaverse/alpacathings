import {
  Link,
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  ButtonGroup,
  Button,
  Image,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FaShoppingCart, FaMoneyBill } from "react-icons/fa";
import { Carousel } from "@mantine/carousel";
function ProductCard(props) {
  return (
    <Carousel.Slide>
      <Card shadow={"dark-lg"} maxW="2xs" my={4}>
        <CardBody>
          <Image
            height={150}
            width={250}
            objectFit={"cover"}
            src={props.imageURL}
            borderRadius="lg"
          />
          <Stack my="3" spacing="3">
            <Heading size="sm">
              {props.name}{" "}
              <Box
                as={"span"}
                color={useColorModeValue("green.600", "green.200")}
              >
                [ {props.con} ]
              </Box>{" "}
            </Heading>
            <Text>{props.description}</Text>
            <Text
              color={useColorModeValue("blue.600", "blue.200")}
              fontSize="md"
            >
              RM {props.price.toFixed(2)}
            </Text>
          </Stack>
          <ButtonGroup spacing="2">
            <Link href={"./checkout"}>
              <Button
                fontSize={"xs"}
                variant="solid"
                colorScheme={"green"}
                leftIcon={<FaMoneyBill />}
              >
                Buy Now
              </Button>
            </Link>
            <Button
              fontSize={"xs"}
              variant="ghost"
              colorScheme={"green"}
              leftIcon={<FaShoppingCart />}
            >
              Add To Cart
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Carousel.Slide>
  );
}

export default ProductCard;
