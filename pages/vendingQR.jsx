import React from "react";
import { Header, Footer, VQR } from "../components";
import { Box } from "@chakra-ui/react";

const VendingQR = () => {
  return (
    <>
      <Header />
      <VQR />
      <Box position={"fixed"} bottom={0} w={"100%"}>
        <Footer />
      </Box>
    </>
  );
};

export default VendingQR;
