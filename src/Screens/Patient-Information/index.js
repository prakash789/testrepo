import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Image,
  Divider,
  Center,
} from "@chakra-ui/react";
import React from "react";
import INPUT from "../../Components/login-input";
import { primaryLoginC } from "../../Theme";
import { useFormik } from "formik";
import PatientCard from "../../Components/PatientCard";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from '@chakra-ui/react'

const PatientInformation = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Flex h="90%" p="20px" alignItems="center" justifyContent="space-between" flexFlow={isLessThan700 ? "column" : ""}>
      <PatientSearchCard />
      <PatientInfoCard />
    </Flex>
  );
};

const PatientSearchCard = () => {
  const { handleChange, values, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      uhid: "",
      aadhaar: "",
      contact: "",
      email: "",
    },
    onSubmit: (values) => {},
  });
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Box flex={1}>
      <form onSubmit={handleSubmit}>
        <Stack borderRadius={isLessThan700 ?"10px" : "30"}  p="15px" boxShadow="dark-lg" width={isLessThan700 ?"300px" : ""} mb={isLessThan700 ? "20px" : ""}>
          <Heading size="md" mt="20px" textAlign="center">
            SEARCH FOR PATIENT
          </Heading>
          <br />

          <INPUT
            label="UHID"
            name="uhid"
            autoFocus={true}
            type="uhid"
            required
          />
          <TextX />
          <INPUT label="AADHAAR" name="aadhaar" type="uhid" required />
          <TextX />
          <INPUT label="CONTACT" name="contact " type="uhid" required />
          <TextX />
          <INPUT label="E-MAIL" name="email" type="uhid" required />
          <br />
          <Button
            isLoading={false}
            loadingText="Submitting..."
            bgGradient={primaryLoginC}
            type="submit"
            color="#fff">
            SEARCH
          </Button>
          <br/>
          <br/>
        </Stack>
      </form>
    </Box>
  );
};

const PatientInfoCard = () => {
  const history = useHistory();
  const handlePatientleaf = () => {
    history.push("/Patient-Leaflet")
   

  }
  
  return (
    <PatientCard onClick={handlePatientleaf} w="90%"/>
  );
};



const TextX = () => {
  return (
    <Text textAlign="center" m="10px">
      OR
    </Text>
  );
};

export default PatientInformation;
