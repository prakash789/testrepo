import { Box, Heading, Stack, Flex } from "@chakra-ui/react";
import React from "react";
import { outstandingBgC, outstandingTextC } from "../../Theme";
import { useMediaQuery } from '@chakra-ui/react'

const TotalOutstanding = ({ data, maxW, minW, size, RsSize }) => {
    const [isLessThan700] = useMediaQuery('(max-width: 700px)')
  
  return (
    
    <Box
      borderWidth="1px"
      borderRadius="sm"
      bg="#f7f7f7"
      minW={minW}
      maxW={maxW}
      mt="2"
      ml={isLessThan700 ? "0" : "2"}
      mr="2"
      width={isLessThan700 ? '250px' : '900'}
      height={isLessThan700 ? '300px' : '340px'}
      // height="340px"
      padding="55px"
      boxShadow="-1px 4px 12px -3px rgba(0,0,0,0.28)"
      color={outstandingTextC}
      >
      <Stack>
        <Heading
          size={size ? size : "sm"}
          textAlign="center"
          textTransform="uppercase"
          ml={isLessThan700 ? "-30px" : ""}
          width={isLessThan700 ? "200px" : ""}
          color={outstandingTextC}>
          Total Outstanding
        </Heading>
        <Heading fontWeight="bold" size={RsSize ? RsSize : "sm"} textAlign="center">
          Rs.{data.total.toFixed(2)}
        </Heading>
      </Stack>
      <Flex justify="center" align="center"  >
        <Stack width={isLessThan700 ? "60px" : ""}>
          <Heading textAlign="center" size={RsSize ? RsSize : "sm"} fontSize= {isLessThan700 ? "17px" : ""} fontWeight="bold">
            OPD
          </Heading>
          <Heading size={RsSize ? RsSize : "sm"} fontSize= {isLessThan700 ? "11px" : ""} fontWeight="bold">
            Rs.&nbsp;{data.opd}
          </Heading>
        </Stack>
        <Box borderLeft="2px solid #0987A0" height={isLessThan700 ? "180px" : "200px"} m="3"></Box>
        <Stack width={isLessThan700 ? "60px" : ""}>
          <Heading textAlign="center" size={RsSize ? RsSize : "sm"} fontSize= {isLessThan700 ? "17px" : ""} fontWeight="bold">
            IPD
          </Heading>
          <Heading size={RsSize ? RsSize : "sm"} fontWeight="bold" fontSize= {isLessThan700 ? "11px" : ""}>
            Rs.&nbsp;{data.ipd}
          </Heading>
        </Stack>
        <Box borderLeft="2px solid #0987A0" height={isLessThan700 ? "180px" : "200px"}  m="3"></Box>
        <Stack width={isLessThan700 ? "60px" : ""}>
          <Heading textAlign="center" size={RsSize ? RsSize : "sm"} fontSize= {isLessThan700 ? "14px" : ""} fontWeight="bold">
            OT/ICU
          </Heading>
          <Heading size={RsSize ? RsSize : "sm"} fontSize= {isLessThan700 ? "11px" : ""} fontWeight="bold">
            Rs.&nbsp;{data.icu}
          </Heading>
        </Stack>
      </Flex>
    </Box>
  );
};

export default TotalOutstanding;
