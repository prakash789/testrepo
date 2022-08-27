import React, { useState } from "react";

import { Heading, Stack, Button, Flex, Text, Image } from "@chakra-ui/react";
import { primaryLoginC } from "../../Theme";
import INPUT from "../../Components/login-input";
import loginImage from "../../Images/login-screen.png";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { doloadGlobalTitle } from "../../Components/AppHeader/action";
import { doLoginAction } from "./Action";
import axios from "../Helpers/apiClient";
import { SERVER_ADDRESS } from "../../Services/Config";
import { Formik } from "formik";
import '../../../node_modules/sweetalert2/dist/sweetalert2.all'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

const Login = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <Flex h="100vh" w="100vw" justifyContent="space-evenly" alignItems="center" flexFlow={isLessThan700 ? "column" : ""}>
      <Flex w={isLessThan700 ? "70%" :"30%"} h={isLessThan700 ? "40%" :"50%"} p="1%">
        <Image src={loginImage} height={"100%"} width={"100%"} />
      </Flex>
      <Flex w={isLessThan700 ? "100%" :"30%"} h="50%" p="1%">
        <LoginForm />
      </Flex>
    </Flex>
  );
};

const LoginForm = (props) => {
  const [loding, setLoding] = useState(false);
  const [isLessThan700] = useMediaQuery('(max-width: 700px)');

  const [statusmessage, setstatusMessage] = useState([]);
  const [showAlert, setShowAlert] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();
  const forgotPassword = () => {
    history.push("/forgot");
  };

  return (
    <Flex
      flex={1}
      textAlign="left"
      pt="50px"
      flexDir="column"
      p="5px"
      justifyContent="center"
      minW="50%">
      {showAlert ? <Stack spacing={3} w={400} position="absolute" top="140px" >

        {
          statusmessage.map((msg) => (
            <Alert id="alertbox" >
              <AlertIcon />
              <AlertTitle mr={2}>Please</AlertTitle>
              <AlertDescription>{msg.message}</AlertDescription>
              <CloseButton position='absolute' right='8px' top='8px' />
            </Alert>

          ))

        }
      </Stack>
        :
        null
      }

      <Heading as="h4" size="xl" bgGradient={primaryLoginC} bgClip="text">
        Login
      </Heading>
      <Text fontSize={16}  bgGradient={primaryLoginC} bgClip="text">
        MASTER ADMIN CONSOLE
      </Text>
      <br />
      <p id="ptag"></p>



      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          let url = SERVER_ADDRESS + "/api/v1/user/login";
          let temp = {
            email: values.email,
            password: values.password,
          };
          
          try {
            setLoding(true);
            axios.post(url, temp).then(async (response) => {
              if (response.status === 200) {
                await localStorage.setItem(
                  "userData",
                  JSON.stringify({
                    user: { ...response.data.data },

                  })
                );
                await dispatch(doLoginAction(response.data.data))
                await dispatch(doloadGlobalTitle("Dashboard"));
                setLoding(false);

                history.push("/dashboard");

              }
              else {
                var res = response.data.data
                console.log(res)
                setstatusMessage(response.data.data)
                setShowAlert(true);
                setTimeout(() => {
                  setShowAlert(false)
                }, 2500);
                setLoding(false);
                
              }

            });
          } catch (error) {
            console.log("Try and Catch Error", error);
          }
        }}>
        
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <Stack >

              <INPUT
                label="USER ID"
                autoFocus={true}
                onChange={handleChange}
                value={values.email}
                name="email"
                type="email"
                required={true}
                
              />
              <br />
              <INPUT
                label="PASSWORD"
                onChange={handleChange}
                value={values.password}
                name="password"
                type="password"
                required={true}
              />
              <Text
                textAlign="right"
                onClick={forgotPassword}
                cursor="pointer"
                _hover={{
                  color: "blue",
                }}>
                forgot password?
              </Text>
              <br />
              <Button
                isLoading={loding}
                loadingText="Loging in..."
                bgGradient={primaryLoginC}
                type="submit"
                color="#fff"
              >
                Login

              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </Flex>
  );
};

export default Login;
