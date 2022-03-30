import { StackDivider, HStack, Text, IconButton, useBreakpointValue, useColorModeValue, VStack, useMergeRefs } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMinusCircle } from "react-icons/ai"

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
            alignItems="center"
        >
            <Text w="100%">{email}</Text>
            {/* potentially get more info about each friend? */}
            {/* <Text w="100%">{firstName}</Text>
            <Text w="100%">{lastName}</Text> */}
            {/* need to add a link here to view their frogs */}
            <Text w="100%">View Frogs</Text>
            <IconButton icon={<AiOutlineMinusCircle/>} variant='unstyled'/>
        </HStack>
    )
})

export default Friend;