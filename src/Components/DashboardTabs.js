import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
} from "@chakra-ui/react";
import { tabHeadingC } from "../Theme";
import { tabHeadingActiveC } from "../Theme";
import Consts from "../Consts";
import { useMediaQuery } from '@chakra-ui/react'


const Placeholders = Consts.topTabPlaceholders.dashboardTabs;

const DashboardHeaderTabs = ({tab1,tab2,tab3,tab4,tab5}) => {
    const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Tabs >
      <Box position="fixed" top={isLessThan700 ? "50px" : "64px"} w={isLessThan700 ? "100%" : "100%"} zIndex="20" >
        <TabList h="60px" justifyContent="center"  bg="white" zIndex="10">
          {Placeholders.map((tab) => (
            <Tab
              _selected={{
                fontWeight: "bold",
                color: tabHeadingActiveC,
                borderColor: tabHeadingActiveC,
              }}
              // fontSize={isLessThan700 ?"11px" : ""}
              // fontWeight={isLessThan700 ?"600" : ""}
              // width="50px"
              // marginRight="-10px"
              // marginLeft="-10px"
              color={tabHeadingC}
              boxShadow="none !important"
              key={tab}>
              {tab}
            </Tab>
          ))}
        </TabList>
      </Box>
      <TabPanels mt="10"  >
        <TabPanel >
          {tab1}
        </TabPanel>
        <TabPanel>
        {tab2}
        </TabPanel>
        <TabPanel>
        {tab3}
        </TabPanel>
        <TabPanel>
        {tab4}
        </TabPanel>
        <TabPanel>
        {tab5}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DashboardHeaderTabs;
