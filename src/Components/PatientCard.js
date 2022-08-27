import React from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  Image,
  Divider,
  Center,
} from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'


const PatientCard = ({ w, onClick, justifyContent }) => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')


  return (
    <Box flex={3}   >
      <Center justifyContent={justifyContent} >

        <Flex justifyContent="space-around" height={isLessThan700 ? "550px" : ""} as={onClick ? "button" : null} onClick={onClick} w={isLessThan700 ? "300px": `${w}`} p="10px" boxShadow="dark-lg" borderRadius="10px" flexFlow={isLessThan700 ? "column" :""}  >


          <Box >
            <Image
              borderRadius="full"
              boxSize="80px"
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
              mt="15px"
              ml={isLessThan700 ? "60px" : ""}
              mb={isLessThan700 ? "20px" : ""}
              height={isLessThan700 ? "150px" : "90px"}
              width={isLessThan700 ?"150px" : ""}
            />
          </Box>



          <PatientInfo />
          <Divider orientation="vertical" h="100px" w="2px" bg="black" />
          <PatientInfo />
          <Divider orientation="vertical" h="100px" w="2px" bg="black" />

          <PatientInfo />
        </Flex>
      </Center>



    </Box>
  );
};

const PatientInfo = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')
  return (
    < Box p="2px" >
      <Stack textAlign={isLessThan700 ?"center" : "left"} width={isLessThan700 ? "280px" : ""} borderBottom={isLessThan700 ? "2px solid gray" : ""} mb= {isLessThan700 ? "10px" : ""}>
        <Text>ANSHUL TYAGI</Text>
        <Text>UHID 0022AA59</Text>
        <Text>CONTACT 9671229656</Text>
        <Text>AGE 26</Text>

      </Stack>

    </Box>
  )
}


export default PatientCard