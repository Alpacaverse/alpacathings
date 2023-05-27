import { useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
  Input,
  HStack,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import PaymentSuccess from "./PaymentSuccess";
import { MdOutlineWallet } from "react-icons/md";
import { useGlobalStore } from "../../store/useGlobalStore";

const Withdrawal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const [value, setValue] = useState(null);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 0.01);
  };

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(0, prevValue - 0.01));
  };

  const handleMaxClick = () => {
    setValue(useGlobalStore.getState().appCredit);
  };

  const handleInputChange = (event) => {
    const inputValue = parseFloat(event.target.value);
    setValue(isNaN(inputValue) ? 0 : inputValue);
  };

  const handlePaymentSuccess = () => {
    onClose(); // Close the withdrawal modal
  };

  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<MdOutlineWallet />}
        colorScheme="twitter"
        variant="outline"
        w={"100%"}
        size={"xs"}
      >
        Withdraw
      </Button>
      <Modal
        size={{ base: "xs", md: "sm" }}
        blockScrollOnMount={isOpen}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" fontSize={"18"} mt="0.5rem" mb="1rem">
              Withdrawal Method
            </Text>
            <Stack direction={"column"}>
              <Button
                colorScheme={selectedButton === "fpx" ? "green" : "gray"}
                onClick={() => handleButtonClick("fpx")}
                fontSize={{ base: "sm", md: "md" }}
              >
                Withdraw Through FPX
              </Button>
              <Button
                colorScheme={selectedButton === "apoints" ? "green" : "gray"}
                onClick={() => handleButtonClick("apoints")}
                fontSize={{ base: "smxs", md: "md" }}
              >
                Convert to Points
              </Button>
            </Stack>
            <Divider my={5} />
            <Text fontWeight="bold" fontSize={"18"} mb="1rem">
              Withdrawal Amount (RM)
            </Text>
            <HStack maxW="380px">
              <Button onClick={handleDecrement}>-</Button>
              <Input
                type="number"
                textAlign="center"
                placeholder="0"
                value={value !== null ? value.toFixed(2) : ""}
                onChange={handleInputChange}
              />
              <Button onClick={handleIncrement}>+</Button>
              <Button colorScheme="green" onClick={handleMaxClick}>
                MAX
              </Button>
            </HStack>
            <Text
              color={"green.400"}
              fontWeight="bold"
              fontSize={"14"}
              mt="0.5rem"
              mb="1rem"
              align={"center"}
              // marginLeft="1rem"
            >
              {selectedButton === "fpx"
                ? "Current Available Credits: RM " +
                  useGlobalStore.getState().appCredit.toFixed(2)
                : "Transferable Alpaca Points: " +
                  useGlobalStore.getState().appCredit * 10}
            </Text>
          </ModalBody>
          <ModalFooter>
            <PaymentSuccess closeModal={onClose} isOpen={false} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Withdrawal;
