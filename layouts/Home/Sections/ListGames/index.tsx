import React from "react";
import {
  Box,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PlayeToEarnTab from "./PlayeToEarnTab";
import FreeToPlayTab from "./FreeToPlayTab";
const ListGameSection = () => {
  return (
    <Box>
      <Tabs variant="unstyled" defaultIndex={1}>
        <Center>
          <TabList>
            <Tab isDisabled>Free to earn</Tab>
            <Tab>Free to play</Tab>
            <Tab isDisabled>Story mode</Tab>
          </TabList>
        </Center>

        <TabPanels>
          <TabPanel>
            <PlayeToEarnTab />
          </TabPanel>
          <TabPanel>
            <FreeToPlayTab />
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ListGameSection;
