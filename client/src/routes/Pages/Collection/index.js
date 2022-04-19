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
import FrogBox from './FrogBox';

export const Collection = () => {
    const { ownedFrogs, email, frog, frogNames } = useSelector(({ auth }) => auth.user)
    const { store } = useSelector(({ auth }) => auth)
    const location = useLocation();
    const friendEmail = location?.state?.friendEmail

    const frogEmail = friendEmail !== undefined ? friendEmail : email


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
                        return (
                            <FrogBox
                                _id={_id}
                                frogId={frogId}
                                url={url}
                                name={name}
                            />
                        )
                    })}
                </SimpleGrid>
            </Container>
        </Layout>
    );
}
