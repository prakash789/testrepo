import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react'

const MessageAlert = ({Item}) => {
  return (
    <>
            <Alert >
                  <AlertIcon />
                  <AlertTitle mr={2}>{}</AlertTitle>
                  <AlertDescription>{Item}</AlertDescription>
                  <CloseButton position='absolute' right='8px' top='8px' />
                </Alert>
    </>
  )
}

export default MessageAlert
