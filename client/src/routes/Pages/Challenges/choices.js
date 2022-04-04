import { Switch, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux';
import React from "react";
import Mongo from '../../../services/mongo';

const AllChallenges = () => {
    const dispatch = useDispatch()
    const [accepted, setAccept] = useSelector({disabled: false, text: "Accept"})
    const { challenges } = useSelector(({ auth }) => auth.user)

    const accept = (e) => {
        e.preventDefault();
        dispatch(Mongo.updateChallenges(email, e.target.value));
		if (accepted.disabled === false) {
			setAccept({disabled: true, text: "Accepted" });
		}
	};

    return (
        <Accordion allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        <Stack align='center' direction='center'>
                            <Box flex='1' textAlign='left' fontWeight='bold' fontSize = 'md'>Challenge 1</Box>
                        </Stack>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Box fontSize = 'sm'>Description</Box>
                <Stack align='center' direction='center' marginTop = '1'>
                    <Button onClick={accept} disabled={accepted.disabled} colorScheme='green' size='sm' marginRight = '1' value={'challenge1'}>{accepted.text}</Button>
                    <Button colorScheme='green' size='sm' variant='outline'>Complete</Button>
                </Stack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>  
    )
}

export default AllChallenges;