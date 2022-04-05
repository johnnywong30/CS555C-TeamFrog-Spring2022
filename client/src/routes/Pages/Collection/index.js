import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Mongo from '../../../services/mongo';
import { SimpleGrid, Box, Image, Container, Heading, Text } from "@chakra-ui/react";
import Layout from '../../../components/layouts/Layout'
import { useLocation } from "react-router";
import audio from '../../../../src/constants/frog.wav';

export const Collection = () => {
    const dispatch = useDispatch()
    const { ownedFrogs, email } = useSelector(({ auth }) => auth.user)
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

    return (
        <Layout>
            <Heading color='white'>Frog Collection</Heading>
            {friendEmail !== undefined &&
                <Text m={3} size='sm'>{friendEmail}'s Frogs</Text>
            }
            <Text m={1} size='sm'>Click a frog friend to pet them!</Text>

            <Container maxW='container.md'
                py={{
                    base: '20',
                    md: '24',
                }
                }
                px={{
                    base: '0',
                    sm: '2',
                }}>
                <SimpleGrid columns={4} spacingX='10px' spacingY='10px'>
                    {store.map(frog => {
                        const { _id, frogId, url } = frog
                        const owned = friendEmail !== undefined ? friendFrogs.includes(frogId) : ownedFrogs.includes(frogId)
                        const onClick = owned ? play : console.log('Mystery ribbit')
                        const imgUrl = owned ? url : mysteryFrogUrl
                        return (
                            <Box key={_id} onClick={onClick} height='225px'>
                                <Image src={imgUrl}/>
                            </Box>
                        )
                    })}

                </SimpleGrid>
            </Container>
        </Layout>
    );
}
