import { useState, useEffect } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

function PaymentSuccess({ closeModal }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        closeModal(); // Close both withdrawal modal
      }, 1000);

      return () => clearTimeout(timeout); // Clear the timeout on modal close
    }
  }, [isOpen, closeModal]);
  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        {" "}
        Confirm Withdrawal
      </Button>

      <Modal size={{ base: "xs", md: "sm" }} isOpen={isOpen} onClose={onClose}>
        {/* <ModalOverlay /> */}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" fontSize={"18"} my="2rem"></Text>
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="50px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Withdrawal Success!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                Thank you for your withdrawal request.
              </AlertDescription>
            </Alert>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PaymentSuccess;
