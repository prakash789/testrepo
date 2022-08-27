import React from "react";

import {
  Box,
  Stack,
  Button,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { TableCell } from "@material-ui/core";
import { DragHandleIcon } from "@chakra-ui/icons";
import { useMediaQuery } from '@chakra-ui/react'

const ActionButton = ({ actionStatus }) => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <>
      <TableCell >
        <Flex justifyContent="right">
          {actionStatus}
          <Box w={isLessThan700 ? 5 : "7"}/>
          <PopOver/>
        </Flex>
      </TableCell>
    </>
  );
};

const PopOver = () => {
  const [value, setValue] = React.useState("1");
  return (
    <Popover>
      <PopoverTrigger>
        <Box
          border="2px"
          borderRadius="10px"
          p="2px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          cursor="pointer">
          <DragHandleIcon />
          <Text>&nbsp;&nbsp; </Text>
          <Text>ACTION</Text>
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent  width="90%">
          <PopoverArrow />

          {/* <PopoverCloseButton /> */}
          <PopoverBody >
            <RadioGroup onChange={setValue} value={value}>
              <Stack alignItems="center" m="10%">
                <Flex >
                  <Radio colorScheme="twitter" value="1">Approve</Radio>
                  &nbsp; &nbsp; &nbsp;
                  <Radio value="2">Suspend</Radio>
                </Flex>
                <br />
                <Button
                  size="sm"
                  borderRadius="full"
                  fontWeight="normal"
                  colorScheme="twitter">
                  CONFIRM
                </Button>
              </Stack>
            </RadioGroup>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default ActionButton;
