import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Mongo from '../../../services/mongo';
import { SimpleGrid, Box, Image, Container, Heading} from "@chakra-ui/react";
import Layout from '../../../components/layouts/Layout'
// import Grid from './Grid';
import { useLocation } from "react-router";
import audio from '../../../../src/constants/frog.wav';

export const Collection = () => {
    const { ownedFrogs, email } = useSelector(({ auth }) => auth.user)
    const links = []
    const[repo, setRepo]= useState([])
    const [play] = useSound(audio);
    const location = useLocation();
    let frogEmail = ""
    let owned = []

    try {
        //console.log(location.state.email);
        frogEmail = location.state.email.friendEmail
        //console.log(email)
    } catch (e) {
        //console.log('failed')
        frogEmail = email
        //console.log(frogEmail)
    }
    const getOwned = () => {
        axios.get(`/frog/getOwnedFrogs/${frogEmail}`).then(response => {
            const ownedFrogArray = response.data;
            console.log(ownedFrogArray)         
        });
    };
    const getRepo = () => {
		axios.get(`/frog/getFrogUrls`).then(response => {
			const myRepo = response.data;
			setRepo(myRepo);
		});
	};
    useEffect(() => getRepo(), []);

    
    for (let i = 0; i < repo.length; i++) {
        const frogID = ownedFrogs[i]
        if (frogID === undefined) {
            links.push("https://imgur.com/VJeksGH.png")
        }
        else {
            links.push(repo[frogID].url)
        }
    }
    return (
        <Layout>
          <Heading color='white'>Frog Collection</Heading>
          <br/>
          <p class='collectionText'>Click your frog friend to pet them!</p>
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
                        {links.map((url) => (
                        <Box onClick={play} height='225px'>
                        <Image
                            src={url}
                        />
                        </Box>))}
                    </SimpleGrid>
            </Container>
        </Layout>
      );
}
