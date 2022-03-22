import { Switch, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux';

import Mongo from '../../../services/mongo';

import * as React from 'react'

const AllChallenges = () => {
    const dispatch = useDispatch()
    const [disable, setDisable] = React.useState(false);
    const { email } = useSelector(({ auth }) => auth.user)

    const handleAcccept = (e) => {
        e.preventDefault();
        dispatch(Mongo.updateChallenges(email, e.target.value));
        setDisable(true);
    }

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
                    <Button disabled={disable} colorScheme='green' size='sm' marginRight = '1' value={'challenge1'} onClick={handleAcccept}>Accept</Button>
                    <Button colorScheme='green' size='sm' variant='outline'>Complete</Button>
                </Stack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>  
    )
}

export default AllChallenges;