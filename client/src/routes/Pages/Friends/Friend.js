import { GridItem, StackDivider, Stack, Text, IconButton, useBreakpointValue, useColorModeValue, VStack, useMergeRefs } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMinusCircle } from "react-icons/ai"
import { useHistory } from "react-router-dom";

import Mongo from '../../../services/mongo';

export const Friend = React.forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const { userEmail, friendEmail } = props;
    const { msg, status } = useSelector(({ common }) => common)
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)
    let history = useHistory();

    const someEventHandler = event => {
        history.push({
            friendCollection: true,
            email: friendEmail
        });
     };

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
                <Link to={{
                        pathname: "/collection",
                        state: { friendEmail: friendEmail } 
                    }}  
                    w="100%">View Frogs
                </Link>
                
                <IconButton icon={<AiOutlineMinusCircle/>} variant='outline' onClick={handleSubmit}/>
            </Stack>
        </GridItem>
    )
})

export default Friend;