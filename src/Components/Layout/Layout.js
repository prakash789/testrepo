import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../AppHeader/header";

const Layout = ({ children } ) => {
 
  return (
    <Box position="fixed" top={0} left={70} right={0} bottom={0}>
      <Header children={children} />
    </Box>
  );
};

export default Layout;
