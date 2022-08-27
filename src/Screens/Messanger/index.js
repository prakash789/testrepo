import {
  Box,
  Flex,
  IconButton,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ArrowForwardIcon, AttachmentIcon } from "@chakra-ui/icons";
import { useMediaQuery } from '@chakra-ui/react'

function Messanger() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["INBOX", "COMPOSE", "SENT"];
  const [isLessThan700] = useMediaQuery('(max-width: 700px)');
  return (
    <Tabs
      isLazy
      onChange={(index) => {
        setTabIndex(index);
      }}>
      <TabList position="sticky" top={"55px"} w="100%" bg="white" zIndex={5}>
        {tabs.map((tab, index) => (
          <Tab fontSize={isLessThan700 ? "13px" : ""} m="1px" _focus={{ boxShadow: "none" }}>
            {tab}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>INBOX</p>
        </TabPanel>

        <TabPanel p="40px">
          <Compose />
        </TabPanel>
        <TabPanel>
          <p>SENT</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

const Compose = () => {
  return (
    <Box>
      <Stack spacing={3}>
        <Input placeholder="TO:" size="md" />
        <Input placeholder="SUBJECT:" size="lg" />
        <Box>
        <Textarea
        //   placeholder="Here is a sample placeholder"
          size="lg"
          border="2px"
          borderBottom="0px"
          borderBottomLeftRadius="0px"
          borderBottomRightRadius="0px"

          style={{ height: "400px" }}
        />
        <Flex justifyContent="space-between" border="1px" borderColor="darkgrey" p="10px" borderRadius="5px">
        <BottomTools icon={<ArrowForwardIcon/>} title="SEND" w="5%"/>
        <BottomTools icon={<AttachmentIcon />}  title="ATTACHMENT" w="9%"/>
         
        </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

const BottomTools = ({icon,title,w}) => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Flex  alignItems="center"  w={isLessThan700 ? "140px" : `${w}`} justifyContent={isLessThan700 ?"" : "space-evenly"} >
    <IconButton
        fontSize={isLessThan700 ? "11px" : "20px"}
        icon={icon}
      />
      
      <Text fontSize={isLessThan700 ? "12px" : ""}>{title}</Text>
     
    </Flex>
  )
}

export default Messanger;
