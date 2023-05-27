import React from "react";
import { Image, Box, Text, Button, Center } from "@chakra-ui/react";
import { MdDownload } from "react-icons/md";

const QRButton = (props) => {
  return (
    <>
      <Box px={10} py={5}>
        <Image
          src="./qr_coloured.png"
          alt="QR Code"
          w={"100%"}
          h={"100%"}
          objectFit="cover"
        />
      </Box>
      <Box px={10}>
        <Text textAlign={"justify"} fontSize={"xs"} py={2}>
          Please display this QR Code to the scanner at our designated vending
          machines to start depositing recyclable materials
        </Text>
      </Box>
      <Box px={10} py={5}>
        <Center>
          <Button
            rightIcon={<MdDownload />}
            colorScheme="green"
            variant="outline"
            size={"sm"}
            onClick={props.open}
          >
            Download QR Code
          </Button>
        </Center>
      </Box>
    </>
  );
};

export default QRButton;
