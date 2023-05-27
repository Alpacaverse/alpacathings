import React from "react";
import PointsDisplay from "./PointsDisplay";
import WithdrawHistory from "./WithdrawHistory";
import CardButton from "./CardButton";
import NearbyLocations from "./NearbyLocations";
import GeneralRates from "./GeneralRates";
import { Box, Stack } from "@chakra-ui/react";

const index = (props) => {
  return (
    <>
      <Stack direction={"column"} m={5} spacing={2}>
        <PointsDisplay
          appCredit={props.appCredit}
          alpacaPoints={props.alpacaPoints}
        />
        <WithdrawHistory />
        <CardButton />
        <NearbyLocations />
        <GeneralRates />
      </Stack>
    </>
  );
};

export default index;
