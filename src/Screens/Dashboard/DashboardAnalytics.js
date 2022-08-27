import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import OpdGraph from "../../Components/OpdGraph/OpdGraph";
import HospitalTable from "../../Components/Tables/HospitalTable/HospitalTable";
import PatientTable from "../../Components/Tables/PatientTable/PatientTable";
import TotalOutstanding from "../../Components/TotalOutstanding/TotalOutstanding";
import { arr1, arr2, arr3, arr4, data } from "../../assests";
import { hospitalTable } from "../../assests";
import { outstanding } from "../../assests";
import { graphFulldata, columnData, header } from "../../assests";
import { TableCell, TableRow } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Consts from "../../Consts";
import { useMediaQuery } from '@chakra-ui/react'

const DashboardAnalytics = () => {

  return (
    <Box m="2" >
      <Flex direction="column" >
        <DashboardTopFlex />
        <Box mt="3" >
          <DashboardBottomBox />
        </Box>
      </Flex>
    </Box>
  );
};

const DashboardTopFlex = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Flex flexFlow={isLessThan700 ? "column " : ""}>
      <PatientAnalytics />
      <TotalOutstanding data={outstanding} />
      <Box maxHeight={isLessThan700 ? "500px" : ""}  marginTop={isLessThan700 ? "10px" : ""}>
      <OpdGraph data={graphFulldata} height={30} width={100} />
      </Box>
    </Flex>
  );
};

const PatientAnalytics = () => {
  return (
    <PatientTable header={Consts.tableHeaders.hospitalPatientTableHeader} >
      {data.body.map((item, index) => (
        <TableRow key={index} >
          <TableCell style={{ fontWeight: "bold", fontSize:"11px", color:"#707070" }}>{item.title}</TableCell>
          <TableCell>{item.male}</TableCell>
          <TableCell>{item.female}</TableCell>
          <TableCell>{item.total}</TableCell>
        </TableRow>
      ))}
    </PatientTable>
  );
};

const DashboardBottomBox = () => {
  const history = useHistory();
  const handleHospitalAnalytics = () => {
    history.push("/hospital");
  };
  return (
    <HospitalTable style={{  }} header={header}>
      {columnData.map((item) => {
        return (
          <TableRow
            onClick={handleHospitalAnalytics}
            style={{ cursor: "pointer", }}>
            <TableCell>{item.state}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.subscriptionType}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        );
      })}
    </HospitalTable>
  );
};

export default DashboardAnalytics;
