import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Mongo from '../../../services/mongo';
import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import audio from '../../../../src/constants/frog.wav';


const Grid = () => {
    const { ownedFrogs } = useSelector(({ auth }) => auth.user)
    const links = []
    const[repo, setRepo]= useState([])
    const [play] = useSound(audio);

	const getRepo = () => {
		axios.get(`/frog/getFrogUrls`).then(response => {
			const myRepo = response.data;
			setRepo(myRepo);
		});
	};

	useEffect(() => getRepo(), []);

	for (let i = 0; i < repo.length; i++) {
		const frogID = ownedFrogs[i];
		if (frogID === undefined) {
			links.push("https://imgur.com/VJeksGH.png");
		} else {
			links.push(repo[frogID].url);
		}
	}

    return (
        <SimpleGrid columns={4} spacingX='10px' spacingY='10px'>
        {links.map((url) => (
            <Box onClick={play} height='225px'>
            <Image
                src={url}
            />
            </Box>))}
        </SimpleGrid>
    )
}

export default Grid;
