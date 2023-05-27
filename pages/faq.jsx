import React from "react";
import {
  Box,
  Text,
  Divider,
  Grid,
  GridItem,
  Stack,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Header, Footer } from "../components";

const faq = () => {
  const questionList = [
    {
      number: 1,
      question: "What can I do with my credits?",
      answer:
        "You can withdraw the credits to your preferable bank through our provided platform.",
    },
    {
      number: 2,
      question: "How long will my items be pending for evaluation?",
      answer:
        "The items will be pending for 3-4 business days for the credits to be confirmed and credited to your account or bank.",
    },
    {
      number: 3,
      question: "Do I need to remove caps and labels of the recyclable items?",
      answer: "No, you can leave the caps and labels as it is.",
    },
    {
      number: 4,
      question: "How long will my listings be in the marketplace?",
      answer:
        "The listings will be in the market place for a 14 days, in which the item will be treated as recycled items unless claimed before the 14 day period.",
    },
    {
      number: 5,
      question: "Do I need to pay to use AlpacaThings?",
      answer: "No, you can use our services for free.",
    },
    {
      number: 6,
      question: "How will the price of my 2nd hand items be calculated?",
      answer:
        "The 2nd hand items will be evaluated manually by our trusted workers.",
    },
    {
      number: 7,
      question: "Does the machine provide cash?",
      answer: "No, the machine can only credit through the application.",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <Text fontWeight={"bold"} my={5} fontSize={"xl"}>
          Frequently Asked{" "}
          <Box as={"span"} color={"green.600"}>
            Questions
          </Box>
        </Text>
        <Box my={10}>
          <Accordion allowToggle>
            {questionList.map((question) => (
              <>
                <AccordionItem key={question.number}>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        {question.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"xs"}>
                    <Text>{question.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </Box>
      </Container>
      <Box position={"fixed"} bottom={0} w={"100%"}>
        <Footer />
      </Box>
    </>
  );
};

export default faq;
