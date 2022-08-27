import {
    Box,
    Stack,
    Button,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useMediaQuery } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { SERVER_ADDRESS } from "../../Services/Config";
import axios from "../Helpers/apiClient";
import INPUT from "../../Components/login-input";
import { useFormik } from "formik";
import { primaryLoginC } from "../../Theme";
import { Heading } from '@chakra-ui/react'
const Webvitals = () => {
    const [loading, setLoading] = useState(false);
  
    const { handleChange, values, handleSubmit, setFieldValue } = useFormik({
      initialValues: {
        state: "",
        city: "",
        name: "",
        company: "",
        contact: "",
        email: "",
        addressline1: "",
        addressline2:"",
        locality:"",
        zipcode:""
  
      },
      onSubmit: (values) => {
        let url = `${SERVER_ADDRESS}/api/v1/hospital/on-board-hospital`;
        let temp = {
          city: values.city,
          state: values.state,
          name: values.name,
          contact: values.contact,
          email: values.email,
          addressline1: values.addressline1,
          addressline2: values.addressline2,
          locality: values.locality,
          zipcode: values.zipcode
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
  
      },
    });
    const [isLessThan700] = useMediaQuery('(max-width: 700px)');
  
  
    return (
      <Box flex={3} p="20px"  m="5px" borderRadius="10px">
        {/* <HeadingX title={leftTitle} size={isLessThan700 ? "sm" :"md"} /> */}
        <Heading size="lg" textAlign="center">Enter Vitals here...</Heading>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <Stack > 
            <Stack pl={isLessThan700 ? "":"33%"} pr={isLessThan700 ? "":"33%"} width={isLessThan700 ? "220px" : ""}>
              <INPUT label="TEMP(F)" name="temp" type="text"  required />
              <br />
              <INPUT label="SPO2 %" name="spo2" type="text"  required />
              <br />
              <INPUT label="BP" name="bp" type="text"  required />
              <br />
              <INPUT label="RBS" name="rbs" type="text"  required />
              <br />
              <INPUT label="H/R" name="hr" type="text"  required />
              <br />
              <INPUT label="R/R" name="rr" type="text" required />
              <br />
              <Button
              isLoading={false}
              loadingText="Uploading..."
              bgGradient={primaryLoginC}
              type="submit"
              color="#fff">
              SUBMIT
            </Button>

            </Stack>
          </Stack>
        </form>
      </Box>
    );
  };
  export default Webvitals;