import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'

import { useHistory } from "react-router-dom";
import PatientCard from "../../Components/PatientCard";
import { tabHeadingC, tabHeadingActiveC } from "../../Theme";
import { OPDConsultHeader, OPDConsultData } from "../../assests";
import { TableCell, TableRow } from "@material-ui/core";
import HospitalTable from "../../Components/Tables/HospitalTable/HospitalTable";

const PatientLeaflet = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Box p={isLessThan700 ? "" : "15px"}  >
      <TopView />
      <Box pt="20px">
        <BottomView />
      </Box>
    </Box>
  );
};

const TopView = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')
  return (
    <Flex >
      <Box position={isLessThan700 ? "absolute" : ""} left={isLessThan700 ? "60px" : ""}>
      <TopGoBAckButton />
      </Box>
      <PatientCard justifyContent="flex-end" w="60%" />
    </Flex>
  );
};

const TopGoBAckButton = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <IconButton onClick={handleGoBack} icon={<ArrowBackIcon />}>
      Call
    </IconButton>
  );
};

const BottomView = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')
  const tabsData = [
    "OPD CONSULTATIONS",
    "OPD TEST REPORTS",
    "DISCHARGE SUMMARIES",
    "IPD TEST REPORTS",
  ];
  return (
    <Tabs boxShadow="dark-lg" borderRadius="15px" >
      <Box >
        <TabList
          borderTopLeftRadius="15px"
          borderTopRightRadius="15px"
          h="60px"
          justifyContent="center"
          bg="white"
          overflow={isLessThan700 ? "auto" : ""}
          >
          {tabsData.map((tab) => (
            <Tab
              _selected={{
                fontWeight: "bold",
                color: tabHeadingActiveC,
                borderColor: tabHeadingActiveC,
              }}
              color={tabHeadingC}
              boxShadow="none !important"
              key={tab}
              fontSize={isLessThan700 ?"11px" : ""}
              marginLeft={isLessThan700 ? "-20px" : ""}

              >
              {tab}
            </Tab>
          ))}
        </TabList>
      </Box>
      <TabPanels h="400px" overflow="auto">
        <TabPanel>
          <Table />
        </TabPanel>
        <TabPanel>
          <Table />
        </TabPanel>
        <TabPanel>
          <Table />
        </TabPanel>
        <TabPanel>
          <Table />
        </TabPanel>
        <TabPanel>
          <Table />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const Table = () => {
  return (
    <HospitalTable header={OPDConsultHeader}>
      {OPDConsultData.map((item) => {
        return (
          <TableRow>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.time}</TableCell>
            <TableCell>{item.doctor}</TableCell>
            <TableCell>{item.dept}</TableCell>
            <TableCell>{item.appointmentId}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.revist}</TableCell>
          </TableRow>
        );
      })}
    </HospitalTable>
  );
};

export default PatientLeaflet;
