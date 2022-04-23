import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Box, Button, Flex, Image, Heading, Stack, Text, HStack, VStack, StackDivider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { notifyClear } from "../../../redux/actions/common";
import { FaCoins } from 'react-icons/fa'
import Mongo from "../../../services/mongo";
import titleData from "../../../constants/titles";

export const Listing = ({ frogLink, frogName, price, own }) => {
	const dispatch = useDispatch();
	const { email, money, titles, ownedFrogs } = useSelector(({ auth }) => auth.user);
	const { store } = useSelector(({ auth }) => auth )
	const { msg, status, loading } = useSelector(({ common }) => common);

	const { beluga, purple, orange, perfect } = titleData

	const scheme = own ? "red" : "primary"
	const text = own ? "Owned" : price

	const handlePurchase = async (e) => {
		e.preventDefault();
		if (! own) dispatch(Mongo.purchaseFrog(email, frogName))
		if (! titles.includes(beluga)) dispatch(Mongo.addTitle(email, beluga))
		if (! titles.includes(purple) && frogName === 'Purple Frog') dispatch(Mongo.addTitle(email, purple))
		if (! titles.includes(orange) && frogName === 'Orange Spotted Frog') dispatch(Mongo.addTitle(email, orange))
		if (! titles.includes(perfect) && ownedFrogs.length === store.length) dispatch(Mongo.addTitle(email, perfect))
	}

	return (
		<VStack
			align="stretch"
			alignItems="center"
			spacing="8px"
			border="4px"
			borderColor="white"
			rounded="1rem"
			backgroundColor="white"
			divider={<StackDivider borderColor="white" borderWidth="4px" />}>
			<Heading marginTop="8px" paddingTop="8px" size="md" color="black">
				{frogName}
			</Heading>
			<Image src={frogLink} boxSize="235px" />
			<Button leftIcon={!own ? <FaCoins/> : <></>} onClick={handlePurchase} h="50%" w="80%" colorScheme={scheme} borderRadius="8px" py="2" px="4" lineHeight="1" size="md">
				{text}
			</Button>
		</VStack>
	);
};

export default Listing;
