import { StackDivider, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack, useMergeRefs } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Mongo from '../../../services/mongo';

export const Friend = React.forwardRef((props, ref) => {
    const { email } = props;
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)

    // grid + divider
    return (
        <HStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
            bg="white"
            textAlign="center"
        >
            <Text w="100%">Hi</Text>
            <Text w="100%">pp</Text>
            <Text w="100%">a</Text>
            <Text w="100%">c</Text>
            <Text w="100%">s</Text>
        </HStack>
    )
})

export default Friend;