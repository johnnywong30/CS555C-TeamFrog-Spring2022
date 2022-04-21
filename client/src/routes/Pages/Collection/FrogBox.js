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

const FrogBox = ({ _id, frogId, url, name }) => {
    const dispatch = useDispatch()
    const { ownedFrogs, email, frog, frogNames } = useSelector(({ auth }) => auth.user)
    const { store } = useSelector(({ auth }) => auth)
    const [friendFrogs, setFriendFrogs] = useState([])
    const [play] = useSound(audio);
    const [subtitle, setSubtitle] = useState("");
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

    function subtitleOnClick() {
        play();
        setSubtitle('Ribbit');
        setTimeout(() => setSubtitle(''), 500);
    }
        
    const owned = friendEmail !== undefined ? friendFrogs.includes(frogId) : ownedFrogs.includes(frogId)
    const onClick = owned ? subtitleOnClick : console.log('Mystery ribbit')
    const imgUrl = owned ? url : mysteryFrogUrl
    const selected = frogId === frog
    const buttonText = selected ? 'Selected' : 'Select'
    // Get the name of the user's jfrog so we can update the button text
    const checkName = frogNames.find(obj => obj.id === frogId)
    const frogName = (checkName !== undefined && owned) ? checkName.name : ""

    return (
        <Box key={_id} height='275px' mb={'1rem'}>
        <FrogName frogId={frogId} frogName={frogName} defaultName={""} isDisabled={!owned} friendEmail={friendEmail !== undefined}></FrogName>
        <Center>
            <Text as="i">{subtitle}</Text>
        </Center>
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
}

export default FrogBox;