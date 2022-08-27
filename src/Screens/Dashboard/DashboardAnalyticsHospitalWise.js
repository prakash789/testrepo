import { Box, Flex, Heading } from '@chakra-ui/react'
import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { data, graphFulldata, hospitalDepttData, hospitalIpdData, hospitalOpdData, outstanding } from '../../assests'
import OpdGraph from '../../Components/OpdGraph/OpdGraph'
import PatientTable from '../../Components/Tables/PatientTable/PatientTable'
import TotalOutstanding from '../../Components/TotalOutstanding/TotalOutstanding'
import Consts from '../../Consts'
import { useMediaQuery } from '@chakra-ui/react'

const DashboardAnalyticsHospitalWise = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Box >
      <HospitalAnalyticsTopFlex />
      <HospitalAnalyticsBottomFlex />
    </Box>
  )
}


const HospitalAnalyticsBottomFlex = () => {
  return (
    <Box >
      <HospitalBottomTable />
    </Box>
  )
}

const HospitalBottomTable = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Box >
      <Flex flex={1} flexFlow={isLessThan700 ? "column" : ""} >
        <Box flex={2} boxShadow="dark-lg" m="10px" borderRadius="5px" >
          <Heading textAlign="center" size="md" p="5px" fontSize={isLessThan700 ? "14px" : ""}> OPD DATA</Heading>
          <PatientTable header={Consts.tableHeaders.hospitalOpdHeader} >
            {hospitalOpdData.map((item, index) => (
              <TableRow key={index} >
                <TableCell style={{ fontWeight: "bold" , fontSize:"13px"}}>{item.doc}</TableCell>
                <TableCell>{item.deptt}</TableCell>
                <TableCell>{item.appont}</TableCell>
                <TableCell>{item.viewed}</TableCell>
              </TableRow>
            ))}
          </PatientTable>
        </Box>
        <Box flex={3} boxShadow="dark-lg" m="10px" borderRadius="5px">
          <Heading textAlign="center" size="md" p="5px" fontSize={isLessThan700 ? "14px" : ""}> IPD DATA</Heading>
          <PatientTable header={Consts.tableHeaders.hospitalIpdheader}>
            {hospitalIpdData.map((item, index) => (
              <TableRow key={index}>
                <TableCell style={{ fontWeight: "bold", fontSize:"13px" }}>{item.doc}</TableCell>
                <TableCell>{item.deptt}</TableCell>
                <TableCell>{item.ipdward}</TableCell>
                <TableCell>{item.icu}</TableCell>
                <TableCell>{item.ot}</TableCell>
                <TableCell>{item.er}</TableCell>
                <TableCell>{item.other}</TableCell>
              </TableRow>
            ))}
          </PatientTable>
        </Box>
      </Flex>
    </Box>
  )
}



const HospitalAnalyticsTopFlex = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Flex  flexFlow={isLessThan700 ? "column" : ""}>
      <Box m="10px"  >
        <HospitalPatientData />
      </Box>
      <Box m="10px"  >
        <HospitalInfo />
      </Box>
    </Flex>
  )
}

const HospitalPatientData = () => {
  return (

    <PatientTable header={Consts.tableHeaders.hospitalPatientTableHeader}>
      {data.body.map((item, index) => (
        <TableRow key={index}>
          <TableCell style={{ fontWeight: "bold", fontSize: "12px" }}>{item.title}</TableCell>
          <TableCell>{item.male}</TableCell>
          <TableCell>{item.female}</TableCell>
          <TableCell>{item.total}</TableCell>
        </TableRow>
      ))}
    </PatientTable>
  )

}

const HospitalInfo = () => {
    const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Box textAlign="center" >
      <Heading p="5px" size="sm" fontSize={isLessThan700 ? "13px" : ""} width="250px">HSPDDN001 CITY HEART CENTRE DEHRADUN UTTARAKHAND</Heading>
      <Flex width="300px" flexFlow={isLessThan700 ? "column" : ""}>
        <Box width={isLessThan700 ?"250px" : "" }>
          <HospitalDepartmentInfoTable />
        </Box>
        <Box ml="5px" height="300px">
          <TotalOutstanding data={outstanding} size="sm" RsSize="md" />
        </Box>
        <Box ml="5px" width={isLessThan700 ? "250px" : ""} mt={isLessThan700 ? "20px" : ""}>
          <OpdGraph data={graphFulldata} height={40} width={80} />
        </Box>

      </Flex>
    </Box>
  )
}

const HospitalDepartmentInfoTable = () => {
  return (
    <PatientTable header={Consts.tableHeaders.hospitalDepartmentTableHeader}>
      {hospitalDepttData.map((item, index) => (
        <TableRow key={index}>
          <TableCell style={{ fontWeight: "bold", fontSize:"12px" }}>{item.title}</TableCell>
          <TableCell>{item.total}</TableCell>
        </TableRow>
      ))}
    </PatientTable>

  )
}

export default DashboardAnalyticsHospitalWise
