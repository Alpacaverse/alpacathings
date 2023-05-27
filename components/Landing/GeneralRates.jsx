import React from "react";
import {
  Box,
  Text,
  Divider,
  Grid,
  GridItem,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const GeneralRates = () => {
  return (
    <>
      <Text fontWeight={"bold"}>
        Our Current{" "}
        <Box as={"span"} color={"green.600"}>
          Rates
        </Box>
      </Text>
      <Box w={"100%"} h={"1px"} bg={"gray.300"} my={2} />
      <Box>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                  Mix Plastic
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"xs"}>
              <Text>Plastic Bottles - RM 0.50 per kg</Text>
              <Text>Plastic Bags - RM 0.40 per kg</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                  Mix Paper
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={"xs"}>
              <Text>Newspapers - RM 0.20 per kg</Text>
              <Text>Magazines - RM 0.30 per kg</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default GeneralRates;
