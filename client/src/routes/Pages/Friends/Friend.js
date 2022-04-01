import { GridItem, StackDivider, Stack, Text, IconButton, useBreakpointValue, useColorModeValue, VStack, useMergeRefs } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMinusCircle } from "react-icons/ai"

import Mongo from '../../../services/mongo';

export const Friend = React.forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const { userEmail, friendEmail } = props;
    const { msg, status } = useSelector(({ common }) => common)
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(Mongo.removeFriend(userEmail, friendEmail))
    }
    // grid + divider
    return (
        <GridItem>
            <Stack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                bg="white"
                textAlign="center"
                alignItems="center"
                direction={['column', 'row']}
            >
                <Text w="100%">{friendEmail}</Text>
                {/* potentially get more info about each friend? */}
                {/* <Text w="100%">{firstName}</Text>
                <Text w="100%">{lastName}</Text> */}
                {/* need to add a link here to view their frogs */}
                <Text w="100%">View Frogs</Text>
                <IconButton icon={<AiOutlineMinusCircle/>} variant='outline' onClick={handleSubmit}/>
            </Stack>
        </GridItem>
    )
})

export default Friend;