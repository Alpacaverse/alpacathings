import React from "react";
import {
  Box,
  Stack,
  Text,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";

const NearbyLocations = () => {
  return (
    <>
      <Text fontWeight={"bold"}>
        Vending Machines{" "}
        <Box as={"span"} color={"green.600"}>
          Near You
        </Box>
      </Text>
      <Box pb={5}>
        <AspectRatio ratio={4 / 3}>
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=11,%20Jalan%20Dato%20Onn,%20Kuala%20Lumpur,%2050480%20Kuala%20Lumpur,%20Wilayah%20Persekutuan%20Kuala%20Lumpur+(PayNet%20HQ)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="800"
          ></iframe>
        </AspectRatio>
      </Box>
    </>
  );
};

export default NearbyLocations;
