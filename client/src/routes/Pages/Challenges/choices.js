import { Progress, Center, Switch, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux';
import React from "react";
import Mongo from '../../../services/mongo';

const AllChallenges = () => {
    const dispatch = useDispatch()
    const { email, challenges, completedChallenges} = useSelector(({ auth }) => auth.user)

    const challengesArr = [
        {name: 'Challenge 1', description: 'Drink atleast 4 cups of water (1 liter) in a day.'},
        {name: 'Challenge 2', description: 'Drink atleast 28 cups of water (7 liters) in a week.'},
        {name: 'Challenge 3', description: 'Refill your cup right after you finish drinking from it.'},
        {name: 'Challenge 4', description: 'Drink atleast 12 cups of water (3 liters) in a day.'},
        {name: 'Challenge 5', description: 'Drink atleast 84 cups of water (21 liters) in a week.'},
    ]

    const mappedChallenges = challengesArr.map(challenge => {
        let accept = challenges.includes(challenge.name)
        let complete = completedChallenges.includes(challenge.name)
        let text = ""

        if (accept == false){
            complete = true;
            text = "Waiting To Be Accepted";
        }

        if (accept == true && complete == false){
            text = "Complete";
        }

        if (accept == true && complete == true){
            text = "Completed";
        }

        return {
            name: challenge.name,
            description: challenge.description,
            accepted: accept,
            completed: complete,
            text: text
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

    const numCompleted = completedChallenges.length
    const total = challengesArr.length
    const progress = numCompleted/total * 100

    return (
        <Box>
            <Accordion allowMultiple>
                {mappedChallenges.map(challenge => {
                    const name = challenge.name
                    const description = challenge.description
                    const accepted = challenge.accepted
                    const completed = challenge.completed
                    const text = challenge.text
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
                                    <Button isDisabled = {completed} onClick={complete} colorScheme='green' size='sm' variant='outline' marginRight = '1' value={name}>{text}</Button>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
            <Center marginTop="2" fontWeight="bold">{progress != 100 ? "In Progress" : "Congratulations!"}</Center>
            <Progress marginTop="2" value={progress} colorScheme='green' size='lg' borderRadius='10'/>
        </Box>
    )
}

export default AllChallenges;