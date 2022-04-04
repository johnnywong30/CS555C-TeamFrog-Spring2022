import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Mongo from "../../../services/mongo";
import { SimpleGrid, Box, Image } from "@chakra-ui/react";

const urls = ["https://imgur.com/cScfraF.png", "https://imgur.com/p5iRh9X.png", "https://imgur.com/cScfraF.png", "https://imgur.com/VJeksGH.png"];

const Grid = () => {
	const { ownedFrogs } = useSelector(({ auth }) => auth.user);
	const links = [];
	const [repo, setRepo] = useState([]);

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
		<SimpleGrid columns={3} spacingX="10px" spacingY="10px">
			{links.map(url => (
				<Image src={url} boxSize="260px" />
			))}
		</SimpleGrid>
	);
};

export default Grid;
