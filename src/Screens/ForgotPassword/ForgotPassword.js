import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Heading,
  Stack,
  Button,
  Flex,
  Text,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { primaryLoginC } from "../../Theme";
import { Formik } from "formik";
import loginImage from "../../Images/login-screen.png";
import axios from "../Helpers/apiClient";
import { SERVER_ADDRESS } from "../../Services/Config";
import INPUT from "../../Components/login-input";
import * as Yup from "yup";
import { useMediaQuery } from '@chakra-ui/react'

const ForgotPassword = (props) => {
  return <ForgotPasswordStacks />;
};

const ForgotPasswordStacks = () => {
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(true);
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [sessionId, setSessionId] = useState();
  const [loading, setLoading] = useState(false);

  const [emailId, setEmailId] = useState("");
  const [authToken, setAuthToken] = useState();
  console.log(emailId, "emailIdemailIdemailId");
  const [isLessThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <Flex h="100vh" w="100vw" justifyContent="space-evenly" alignItems="center" flexFlow={isLessThan700 ? "column" : ""}>
      <Flex w={isLessThan700 ? "70%" :"30%"} h={isLessThan700 ? "40%" :"50%"} p="1%">
        <Image src={loginImage} height={"100%"} width={"100%"} />
      </Flex>
      <Flex w={isLessThan700 ? "100%" :"30%"} h="50%" p="1%">
        <Flex
          flex={1}
          textAlign="left"
          pt="50px"
          flexDir="column"
          p="5px"
          justifyContent="center"
          minW="50%">
          <Heading as="h4" size={isLessThan700 ? "lg" :"xl"} bgGradient={primaryLoginC} bgClip="text">
            Forgot Password
          </Heading>
          <Text fontSize={isLessThan700 ? 13 :16} bgGradient={primaryLoginC} bgClip="text">
            MASTER ADMIN CONSOLE
          </Text>
          <br />

          {verifyEmail ? (
            <SendOtpScreen
              setEmailId={setEmailId}
              setVerifyEmail={setVerifyEmail}
              setSessionId={setSessionId}
              loading={loading}
              setLoading={setLoading}
              setVerifyOtp={setVerifyOtp}
            />
          ) : null}
          {verifyOtp ? (
            <VerifyOtpScreen
              emailId={emailId}
              setEmailId={setEmailId}
              setVerifyOtp={setVerifyOtp}
              sessionId={sessionId}
              setSessionId={setSessionId}
              loading={loading}
              setLoading={setLoading}
              setAuthToken={setAuthToken}
              setPasswordVerify={setPasswordVerify}
              setVerifyEmail={setVerifyEmail}
            />
          ) : null}
          {passwordVerify ? (
            <ChangePasswordScreen
              setPasswordVerify={setPasswordVerify}
              loading={loading}
              setLoading={setLoading}
              authToken={authToken}
            />
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

const SendOtpScreen = ({
  setVerifyEmail,
  setVerifyOtp,
  setSessionId,
  loading,
  setLoading,
  setEmailId,
}) => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(values) => {
        let url = SERVER_ADDRESS + "/api/v1/user/forgot-password";
        let temp = {
          email: values.email,
        };

        setLoading(true);
        setEmailId(values.email);

        try {
          axios.post(url, temp).then(async (response) => {
            console.log("response", response);
            setSessionId(response.data.sessionId);
          });
          setVerifyOtp(true);
          setVerifyEmail(false);
          setLoading(false);
        } catch (error) {
          console.log("Try and Catch Error", error);
          setLoading(false);
        }
      }}>
      {({ handleChange, handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Stack>
            <INPUT
              label="Email ID"
              autoFocus={true}
              onChange={handleChange}
              value={values.email}
              name="email"
              type="email"
              required={true}
            />

            <br />

            <Button
              isLoading={loading}
              loadingText="Sending..."
              bgGradient={primaryLoginC}
              type="submit"
              color="#fff">
              Send Code
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

const VerifyOtpScreen = ({
  emailId,
  setVerifyOtp,
  setPasswordVerify,
  sessionId,
  setSessionId,
  setEmailId,
  setVerifyEmail,
  setAuthToken,
  loading,
  setLoading,
}) => {
  const [seconds, setSeconds] = React.useState(59);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
    }
  }, [seconds]);
  return (
    <Formik
      initialValues={{
        code: "",
      }}
      onSubmit={(values) => {
        let url = SERVER_ADDRESS + "/api/v1/user/verify-otp";

        let temp = {
          email: emailId,
          sessionId: sessionId,
          otp: values.code,
        };

        let resendOtpUrl = SERVER_ADDRESS + "/api/v1/user/forgot-password";
        let resendOtptemp = {
          email: emailId,
        };
        setLoading(true);
        if (seconds !== 0) {
          axios.post(url, temp).then(
            async (response) => {
              console.log(response);
              await setEmailId(response.data.data.email);
              await localStorage.setItem(
                "userToken",
                JSON.stringify({
                  userToken: response.data.data.authToken,
                })
              );
              await setAuthToken(response.data.data.authToken);
              await setLoading(false);
              await setPasswordVerify(true);
              await setVerifyOtp(false);
              await setVerifyEmail(false);
            },

            (error) => {
              console.log("Try and Catch Error", error);
              setLoading(false);
            }
          );
        }

        if (seconds === 0) {
          try {
            axios.post(resendOtpUrl, resendOtptemp).then(async (response) => {
              console.log("response", response);
              setSessionId(response.data.sessionId);
              setLoading(false);
              setSeconds(59);
            });
          } catch (error) {
            console.log("Try and Catch Error", error);
            setLoading(false);
          }
        }
      }}>
      {({ handleChange, handleSubmit, values }) => (
        <Stack>
          <form onSubmit={handleSubmit}>
            <INPUT
              label="Enter OTP"
              autoFocus={true}
              maxLength={6}
              onChange={handleChange}
              value={values.code}
              name="code"
              type="code"
              required={seconds === 0 ? false : true}
            />{" "}
            {seconds === 0 ? (
              <br />
            ) : (
              <Text fontSize="16px" color="blue" cursor="pointer">
                {" "}
                Resend OTP in 00:{seconds}s
              </Text>
            )}
            <br />
            <Button
              disabled={
                seconds === 0
                  ? false
                  : values.code === "" || values.code.length < 6
              }
              isLoading={loading}
              loadingText={seconds === 0 ? "Resending..." : "Verifying..."}
              bgGradient={primaryLoginC}
              type="submit"
              color="#fff">
              {seconds === 0 ? "RESEND OTP" : "VERIFY"}
            </Button>
          </form>
        </Stack>
      )}
    </Formik>
  );
};

const ChangePasswordScreen = ({ authToken }) => {
  const history = useHistory();

  console.log(authToken, "authToken");
  return (
    <Stack>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string()
            .min(8)
            .max(20)
            .required("Password is required"),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
        })}
        onSubmit={(values) => {
          let url = `${SERVER_ADDRESS}/api/v1/user/change-password`;
          let temp = {
            password: values.password,
            confirm_password: values.confirmPassword,
          };
          console.log(temp, url, "tempsssss");

          // if (
          //   values.password === values.confirmPassword &&
          //   values.confirmPassword.length >= 8 &&
          //   values.password.length >= 8
          // ) {
            try {
              console.log("tempsssss");

              axios
                .post(url, temp)
                .then(async (response) => {
                  if(response.status===200){
                    alert(response.data.message);
                    history.push("/login")
                  }
                })
                .catch((error) => {
                  console.log(error, "@@@@@@@@su");
                });
            } catch (error) {
              console.log("Try and Catch Error", error);
            }
          
        }}>
        {({ handleChange, handleSubmit, values, errors,touched,isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <INPUT
              label="New Password"
              value={values.password}
              autoFocus={true}
              onChange={handleChange}
              name="password"
              type="text"
              required={true}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
            <br />
            <br />

            <INPUT
              label="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              type="text"
              required={true}
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />

            <br />
            <br />
            <Button
              loading={true}
              disabled={isSubmitting}
              loadingText="Confirming..."
              bgGradient={primaryLoginC}
              type="submit"
              color="#fff">
              Confirm
            </Button>
          </form>
        )}
      </Formik>
    </Stack>
  );
};

export default ForgotPassword;
