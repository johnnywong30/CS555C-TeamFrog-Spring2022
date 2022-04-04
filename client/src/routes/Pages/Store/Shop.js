import React, { useEffect, useState } from "react";
import { SimpleGrid, Box, Flex, HStack } from "@chakra-ui/react";
import { Listing } from "./froglisting";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiFillRightCircle } from "react-icons/ai";

const Shop = () => {
	const { ownedFrogs } = useSelector(({ auth }) => auth.user);
	const frogs = [];
	const [repo, setRepo] = useState([]);

	const getRepo = () => {
		axios.get(`/frog/getFrogs`).then(response => {
			const myRepo = response.data;
			setRepo(myRepo);
		});
	};

	useEffect(() => getRepo(), []);

	let own = true;
	for (let i = 0; i < repo.length; i++) {
		const frogID = ownedFrogs[i];
		if (frogID === undefined) own = false;
		frogs.push({ url: repo[i].url, name: repo[i].name, owns: own });
	}

	return (
		<Flex
			align="center"
			justify={{ base: "center", md: "space-around", xl: "space-between" }}
			direction={{ base: "column-reverse", md: "row" }}
			wrap="no-wrap"
			minH="70vh"
			px={8}
			mb={16}>
			<SimpleGrid columns={3} spacingX="10px" spacingY="10px">
				{frogs.map(frog => (
					<Listing frogLink={frog.url} frogName={frog.name} own={frog.owns} price="500"></Listing>
				))}
			</SimpleGrid>
		</Flex>
	);
};

export default Shop;
