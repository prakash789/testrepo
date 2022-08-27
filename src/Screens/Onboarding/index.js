import {
  Box,
  Stack,
  Heading,
  Button,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import React, { useState } from "react";
import INPUT from "../../Components/login-input";
import { useFormik } from "formik";
import { primaryLoginC } from "../../Theme";
import { onboardingStatusHeader, OPDConsultData } from "../../assests";
import { TableCell, TableRow } from "@material-ui/core";
import HospitalTable from "../../Components/Tables/HospitalTable/HospitalTable";
import ActionButton from "../../Components/PopOver-Action-Buton";
import { Formik } from "formik";
import axios from "../Helpers/apiClient";
import { SERVER_ADDRESS } from "../../Services/Config";
import { useMediaQuery } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

const leftTitle = "HOSPITAL PREMIUM ONBOARDING FORM";
const rightTitle = "FREEMIUM ONBOARDING FORM";

const Onboarding = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["NEW ONBOARDING", "STATUS"];
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

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
          <Premium />
          {/* <Freemium /> */}
        </TabPanel>

        <TabPanel h="500px" overflow="auto">
          <StatusTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const Premium = () => {

  const [loading, setLoading] = useState(false);
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')


  return (
    <Box p="20px" boxShadow="dark-lg" m="auto" borderRadius="10px" width={isLessThan700 ? "100%" : "60%"}>
      <Formik
        initialValues={{
          state: "",
          city: "",
          hospitalName: "",
          type: "",
          adminContact: "",
          email: "",
          hospitalContact: "",
          ambulanceNumber: ""
        }}
        onSubmit={(values) => {
          let url = `${SERVER_ADDRESS}/api/v1/hospital/on-board-hospital`;
          let temp = {
            city: values.city,
            state: values.state,
            email: values.email,
            hospital_name: values.hospitalName,
            type: values.type,
            official_mobile_number: values.hospitalContact,
            ambulance_number: values.ambulanceNumber,
            mobile_number: values.adminContact
          };
          console.log(temp, "temp");
          setLoading(true)
          try {
            axios
              .post(url, temp)
              .then(async (response) => {
                if (response.status === 200) {
                  setLoading(false)
                  alert(response.data.message);

                }
                setLoading(false)
                alert(response.data.message);
              })
              .catch((error) => {
                setLoading(false)
                console.log(error, "error");

              });
          } catch (error) {
            setLoading(false)
            console.log("Try and Catch Error", error);
          }
        }}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <>
            <HeadingX title={leftTitle} size={isLessThan700 ? "sm" : "md"} />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <Stack >
                <Stack width={isLessThan700 ? "100%" : "50%"} margin="0 auto">
                  {/* <INPUT
                    label="STATE"
                    name="state"
                    type="state"
                    required
                    onChange={handleChange}
                    value={values.state}
                  /> */}
                  <Select placeholder='State'onChange={handleChange}>
                    <option value='option1'>Gujarat</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                  </Select>
                  <br />
                  {/* <INPUT
                    label="CITY"
                    name="city"
                    type="city"
                    required
                    onChange={handleChange}
                    value={values.city}
                  /> */}
                    <Select placeholder='City' onChange={handleChange}>
                    <option value='option1'>mohali</option>
                    <option value='option2'>chandigarh</option>
                    <option value='option3'>Gurgaon</option>
                    <option value='option2'>Faridabad</option>
                    <option value='option3'>Pune</option>
                    <option value='option2'>Kasol</option>
                    <option value='option3'>Ahmdabad</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                  </Select>

                  <br />
                  <INPUT
                    label="HOSPITAL NAME"
                    name="hospitalName"
                    type="hospitalName"
                    onChange={handleChange}
                    value={values.hospitalName}
                    required
                  />
                  <br />
                  <INPUT
                    label="TYPE"
                    name="type"
                    type="type"
                    required
                    onChange={handleChange}
                    value={values.type}
                  />

                  <br />
                  <INPUT
                    label="EMAIL"
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={values.email}
                  />
                  <br />
                  <INPUT
                    label="HOSPITAL CONTACT"
                    name="hospitalContact"
                    type="hospitalContact"
                    required
                    onChange={handleChange}
                    value={values.hospitalContact}
                  />
                  <br />
                  <INPUT
                    label="ADMIN CONTACT"
                    name="adminContact"
                    type="adminContact"
                    required
                    onChange={handleChange}
                    value={values.adminContact}
                  />

                  <br />
                  <INPUT
                    label="AMBULANCE NUMBER"
                    name="ambulanceNumber"
                    type="ambulanceNumber"
                    required
                    onChange={handleChange}
                    value={values.ambulanceNumber}
                  />
                  <br />

                </Stack>
                <Button
                  isLoading={loading}
                  loadingText="Uploading..."
                  bgGradient={primaryLoginC}
                  type="submit"
                  color="#fff">
                  UPLOAD FOR APPROVAL
                </Button>

              </Stack>
            </form>
          </>
        )}
      </Formik>
    </Box>
  );
};
// const Freemium = () => {
//   const { handleChange, values, handleSubmit, setFieldValue } = useFormik({
//     initialValues: {
//       state: "",
//       city: "",
//       name: "",
//       email: "",
//       contact: "",
//     },
//     onSubmit: (values) => {},
//   });
//   return (
//     <Box flex={1} p="20px" boxShadow="dark-lg" m="5px" borderRadius="10px">
//       <HeadingX title={rightTitle} size="sm" />
//       <br />
//       <br />
//       <br />
//       <br />
//       <form onSubmit={handleSubmit}>
//         <Stack>
//           <Stack pl="30px" pr="30px">
//             <INPUT label="STATE" name="state" type="state" required />
//             <br />
//             <INPUT label="CITY" name="city" type="city" required />
//             <br />
//             <INPUT label="NAME" name="name" type="name" required />
//             <br />
//             <INPUT label="E-MAIL" name="email" type="email" required />
//             <br />
//             <INPUT label="CONTACT" name="contact" type="contact" required />

//             <br />
//           </Stack>
//           <Button
//             isLoading={false}
//             loadingText="Sharing..."
//             bgGradient={primaryLoginC}
//             type="submit"
//             color="#fff">
//             SHARE THE LINK
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

const HeadingX = ({ title, size }) => {
  return (
    <Heading size={size} textAlign="center">
      {title}
    </Heading>
  );
};

const StatusTable = () => {
  return (
    <HospitalTable header={onboardingStatusHeader}>
      {OPDConsultData.map((item) => {
        return (
          <TableRow>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.time}</TableCell>
            <TableCell>{item.doctor}</TableCell>
            <TableCell>{item.dept}</TableCell>
            <TableCell>{item.appointmentId}</TableCell>
            <ActionButton actionStatus={item.status} />
          </TableRow>
        );
      })}
    </HospitalTable>
  );
};

export default Onboarding;
