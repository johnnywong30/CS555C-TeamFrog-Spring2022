import React, { useEffect, useState } from "react";
import { Alert, AlertIcon, CloseButton, SimpleGrid, Box, Flex, HStack, GridItem } from "@chakra-ui/react";
import { Listing } from "./froglisting";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiFillRightCircle } from "react-icons/ai";
import { notifyClear } from "../../../redux/actions/common";
import Mongo from "../../../services/mongo";

const Shop = () => {
	const dispatch = useDispatch()
	const { ownedFrogs } = useSelector(({ auth }) => auth.user);
	const { store } = useSelector(({ auth }) => auth)
	const { msg, status, loading } = useSelector(({ common }) => common);
	
	const getFrogs = () => {
		dispatch(Mongo.getFrogList())
	}

	useEffect(() => getFrogs(), []);

	const frogs = [];
	for (let i = 0; i < store.length; i++) {
		const { _id, frogId, name, url, price } = store[i]
		const frogItem = {
			key: _id,
			frogId: frogId,
			name: name,
			url: url,
			price: price,
			owns: ownedFrogs.includes(frogId)
		}
		frogs.push(frogItem);
	}

	const handleClear = e => {
		e.preventDefault();
		dispatch(notifyClear());
	};

	return (
		<Flex
			align="center"
			justify={{ base: "center", md: "space-around", xl: "space-between" }}
			direction={{ base: "column-reverse", md: "row" }}
			wrap="no-wrap"
			minH="70vh"
			px={8}
			mb={16}>

			<SimpleGrid columns={3} spacing={10}>
				{msg &&
					<GridItem rowSpan={1} colSpan={3}>
						<Alert status={status} borderRadius="10">
							<AlertIcon />
							{msg}
							<CloseButton position='absolute' right='8px' top='8px' onClick={handleClear} />
						</Alert>
					</GridItem>
				}
				{frogs.map(frog => (
					<Listing key={frog.key} frogLink={frog.url} frogName={frog.name} own={frog.owns} price={frog.price} />
				))}
			</SimpleGrid>
		</Flex>
	);
};

export default Shop;
