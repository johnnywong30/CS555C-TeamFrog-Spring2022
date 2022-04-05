import { Switch, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux';
import React from "react";
import Mongo from '../../../services/mongo';
import { cp } from 'fs';

const AllChallenges = () => {
    const dispatch = useDispatch()
    const { email, challenges, completedChallenges} = useSelector(({ auth }) => auth.user)

    const challengesArr = [
        {name: 'Challenge 1', description: 'Drink 10 cups of water in a week'},
        {name: 'Challenge 2', description: 'Drink 10 cups of water in a week'},
        {name: 'Challenge 3', description: 'Drink 10 cups of water in a week'},
        {name: 'Challenge 4', description: 'Drink 10 cups of water in a week'},
        {name: 'Challenge 5', description: 'Drink 10 cups of water in a week'},
    ]

    const mappedChallenges = challengesArr.map(challenge => {
        let accept = challenges.includes(challenge.name)
        let complete = completedChallenges.includes(challenge.name)

        if (accept == false){
            complete = true;
        }

        return {
            name: challenge.name,
            description: challenge.description,
            accepted: accept,
            completed: complete
        }
    })

    const accept = (e) => {
        e.preventDefault();
        dispatch(Mongo.updateChallenges(email, e.target.value));
	};

    const complete = (e) => {
        e.preventDefault();
        dispatch(Mongo.updateCompletedChallenges(email, e.target.value));
	};

    return (
        <Accordion allowMultiple>
            {mappedChallenges.map(challenge => {
                const name = challenge.name
                const description = challenge.description
                const accepted = challenge.accepted
                const completed = challenge.completed
                return (
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                <Stack align='center' direction='center'>
                                    <Box flex='1' textAlign='left' fontWeight='bold' fontSize = 'md'>{name}</Box>
                                </Stack>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box fontSize = 'sm'>{description}</Box>
                            <Stack align='center' direction='center' marginTop = '1'>
                                <Button isDisabled = {accepted} onClick={accept} colorScheme='green' size='sm' marginRight = '1' value={name}>{accepted ? "Accepted" : "Accept Challenge"}</Button>
                                <Button isDisabled = {completed} onClick={complete} colorScheme='green' size='sm' variant='outline' marginRight = '1' value={name}>{completed ? "Completed" : "Complete"}</Button>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                )
            })}
        </Accordion>  
    )
}

export default AllChallenges;