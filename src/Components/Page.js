import React from "react";
import { Flex } from "@chakra-ui/react";

export default ({ children, style, ...rest }) => {
  return <Flex {...rest}>{children}</Flex>;
};
