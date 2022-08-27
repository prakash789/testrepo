import { Box, Radio, RadioGroup, Flex, Stack, Text, Heading, Table, Thead, Tr, Th, Tbody, Td, Image } from '@chakra-ui/react';
import React from 'react'
import INPUT from '../../Components/itextInput';
import ButtonX from '../../Components/button.js'
import { appThemeColor, textColor } from '../../Theme';
import MediledgeFullLogo from "../../Images/side-bar-icons/medLogo.png";
import { useMediaQuery } from '@chakra-ui/react'


function LabOnboarding() {
  return (
    <Box bg='red' h='100vh'>
      <WelcomeFormModal />
    </Box>
  )
}

const WelcomeFormModal = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <Box
      p="3%"
      h="100vh"
      w="100vw"
      position="fixed"
      bg="white"
      top={0}
      left={0}
      zIndex={1200}
      overflow="auto"
    >
      <Flex justifyContent="space-evenly" flexFlow={isLessThan700 ? "column" :""}>
        <Box flex={1} >
          <Image src={MediledgeFullLogo} />
        </Box>
        <Stack flex={5} mt={isLessThan700 ? "10px" : ""} >
          <Heading size="lg" fontWeight={600} textAlign="center" color={textColor.appGreyText}>Lab Onboarding Form</Heading>
        </Stack>


      </Flex>
      <br />
      <Stack borderRadius="5px">
        <Flex margin="auto" w={isLessThan700 ?'100%' : "80%"} padding="0px">
          <Stack spacing="40px" flex={.5} p="10px" borderRight="2px" borderColor='gray.200'>
            <INPUT
              label="LABORATORY NAME"
              autoFocus={true}
              name="username"
              type="username"
              required={true}
              shadow="dark-lg"
            // style={{width:300}}
            />
            <Box >
              <Heading size="sm" textAlign="left" marginBottom={5} color={textColor.appGreyText} fontSize={isLessThan700 ? "13px":""}>NABL ACCREDITED</Heading>

              <RadioButton buttonOne="YES" buttonTwo="NO" />
            </Box>
            <INPUT
              label="LAB ID"
              autoFocus={true}
              name="username"
              type="username"
              required={true}
            // style={{width:300}}
            />
            <INPUT
              label="CERTIFICATE No."
              autoFocus={true}
              name="username"
              type="username"
              required={true}
            // style={{width:300}}
            />
            <INPUT
              label="LAB TYPE"
              autoFocus={true}
              name="username"
              type="username"
              required={true}
            // style={{width:300}}
            />

          </Stack>

          <Box h='10%' borderTopWidth={2} />

          <Stack spacing="20px" flex={1} p="10px">
            <Text color={textColor.appGreyText} textAlign="left" fontWeight={600}>
              ADDRESS
            </Text>
            <Box borderTopWidth={2} />
            <Stack
              shadow="sm"
              // p="10px"
              spacing="12px"
              borderRadius="5px">
              <INPUT
                label="ADDRESS LINE 1"
                autoFocus={true}
                name="username"
                type="username"
                required={true}
                style={{ marginBottom: ".7rem"}}
              />
              <INPUT
                label="ADDRESS LINE 2"
                autoFocus={true}
                name="username"
                type="username"
                required={true}
                style={{ marginBottom: ".7rem" }}
              />
              <INPUT
                label="ADDRESS LINE 3"
                autoFocus={true}
                name="username"
                type="username"
                required={true}
                style={{ marginBottom: ".7rem" }}
              />
              <INPUT
                label="CITY / TOWN"
                autoFocus={true}
                name="username"
                type="username"
                required={true}
                style={{ marginBottom: ".7rem" }}
              />
              <INPUT
                label="STATE"
                autoFocus={true}
                name="username"
                type="username"
                required={true}
                style={{ marginBottom: ".7rem" }}
              />
              <INPUT
                label="COUNTRY"
                autoFocus={true}
                name="username"
                type="username"
                required={true}
                style={{ marginBottom: ".7rem" }}
              />
              <INPUT
                label="ZIP CODE"
                autoFocus={true}
                name="username"
                type="username"
                required={true}
              />
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <ButtonX title="SUBMIT" w={isLessThan700 ?"20%" :"10%"} position="absolute" left={isLessThan700 ?"270" : "1110"} />

    </Box>
  );
};

const RadioButton = ({ buttonOne, buttonTwo }) => {
  return (
    <RadioGroup
      spacing="50px"
      borderRadius="5px"
      border="1px solid #C0C0C0"
      p="5px"
      h="55px"
      defaultValue="2">
      <Stack justifyContent="space-evenly" spacing={5} direction="row" marginTop={3}>
        <Radio colorScheme="red" value="1">
          {buttonOne}
        </Radio>
        <Radio colorScheme="green" value="2">
          {buttonTwo}
        </Radio>
      </Stack>
    </RadioGroup>
  );
};


export default LabOnboarding
