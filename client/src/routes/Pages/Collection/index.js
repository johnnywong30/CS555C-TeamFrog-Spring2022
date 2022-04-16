import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Mongo from '../../../services/mongo';
import { Button, Center, SimpleGrid, Box, Image, Container, Heading, Text } from "@chakra-ui/react";
import Layout from '../../../components/layouts/Layout'
import { useLocation } from "react-router";
import { GiFrogFoot } from 'react-icons/gi'
import audio from '../../../../src/constants/frog.wav';
import Titles from './Titles';
import { FrogName } from './FrogName'

export const Collection = () => {
    const dispatch = useDispatch()
    const { ownedFrogs, email, frog, frogNames } = useSelector(({ auth }) => auth.user)
    const { store } = useSelector(({ auth }) => auth)
    const [friendFrogs, setFriendFrogs] = useState([])
    const [play] = useSound(audio);

    const location = useLocation();
    const friendEmail = location?.state?.friendEmail

    const frogEmail = friendEmail !== undefined ? friendEmail : email
    const mysteryFrogUrl = 'https://imgur.com/VJeksGH.png'

    const getFriendFrogs = async () => {
        axios.get(`/user/getOwnedFrogs/${frogEmail}`).then(response => {
            const friendOwnedFrogs = response.data;
            setFriendFrogs(friendOwnedFrogs)
        });
    };

    const getFrogs = async () => {
        dispatch(Mongo.getFrogList())
    }

    useEffect(async () => {
        await getFrogs()
        if (friendEmail !== undefined) await getFriendFrogs()
    }, []);

    const selectFrog = (e) => {
        dispatch(Mongo.updateFrog(email, e.target.value))
    }

    return (
        <Layout>
            <Heading color='white'>
                {friendEmail !== undefined ? `${friendEmail}'s` : ''} Frog Collection
            </Heading>
            <Text m={1} mt={2} size='sm'>Click a frog friend to pet them!</Text>
            <Text mb={1} size='sm'>You can also select your Frog Title below.</Text>
            {friendEmail === undefined && <Titles />}
            <Container maxW='container.md'
                py={{
                    base: '12',
                    md: '6',
                }
                }
                px={{
                    base: '0',
                    sm: '2',
                }}>
                <SimpleGrid columns={3} spacing={10}>
                    {store.map(element => {
                        const { _id, frogId, url, name } = element
                        const owned = friendEmail !== undefined ? friendFrogs.includes(frogId) : ownedFrogs.includes(frogId)
                        const onClick = owned ? play : console.log('Mystery ribbit')
                        const imgUrl = owned ? url : mysteryFrogUrl
                        const selected = frogId === frog
                        const buttonText = selected ? 'Selected' : 'Select'
                        // Get the name of the user's frog so we can update the button text
                        const checkName = frogNames.find(obj => obj.id === frogId)
                        const frogName = (checkName !== undefined && owned) ? checkName.name : ""
                        // currently does not display friends' custom names for frogs and only displays user's
                        return (
                            <Box key={_id} height='275px' mb={'1rem'}>
                                <FrogName frogId={frogId} frogName={frogName} defaultName={""} isDisabled={!owned} friendEmail={friendEmail !== undefined}></FrogName>
                                <Image onClick={onClick} src={imgUrl} rounded="1rem" shadow="2xl" />
                                {(friendEmail === undefined && owned) &&
                                    <Center>
                                        <Button value={frogId} onClick={selectFrog} size='sm' variant='unstyled' colorScheme='blackAlpha' isDisabled={selected} leftIcon={<GiFrogFoot />}>
                                            {buttonText}
                                        </Button>
                                    </Center>
                                }
                            </Box>
                        )
                    })}
                </SimpleGrid>
            </Container>
        </Layout>
    );
}
