import React from "react";
import ModalComponent from "./ModalComponent";
import TabGroup from "./TabGroup";
import QRButton from "./QRButton";
import { Box, Stack } from "@chakra-ui/react";
import { useDisclosure } from "@mantine/hooks";

const index = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Stack direction={"column"} m={5} spacing={2}>
        <TabGroup />
        <QRButton open={open} />
        <ModalComponent opened={opened} close={close} />
      </Stack>
    </>
  );
};

export default index;
