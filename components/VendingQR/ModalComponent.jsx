import { Modal, Group, Button } from "@mantine/core";
import {
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function ModalComponent(props) {
  return (
    <>
      <Modal
        opened={props.opened}
        onClose={props.close}
        centered
        withCloseButton={false}
      >
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
            Successfully Connected
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            AlpacaThings Vending Machine has successfully connected to your
            account.
          </AlertDescription>
        </Alert>
      </Modal>
    </>
  );
}

export default ModalComponent;
