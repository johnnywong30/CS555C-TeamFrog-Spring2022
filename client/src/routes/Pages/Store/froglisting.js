import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Box, Button, Flex, Image, Heading, Stack, Text, HStack, VStack, StackDivider } from "@chakra-ui/react";
import Mongo from "../../../services/mongo";
import { useDispatch, useSelector } from "react-redux";
import { notifyClear } from "../../../redux/actions/common";
import { FaCoins } from 'react-icons/fa'

export const Listing = ({ frogLink, frogName, price, own }) => {
	const dispatch = useDispatch();
	const { email, money } = useSelector(({ auth }) => auth.user);
	const { msg, status, loading } = useSelector(({ common }) => common);

	const scheme = own ? "red" : "primary"
	const text = own ? "Owned" : price

	const handlePurchase = e => {
		e.preventDefault();
		if (! own) dispatch(Mongo.purchaseFrog(email, frogName))
	}

	return (
		<VStack
			align="stretch"
			alignItems="center"
			spacing="8px"
			border="4px"
			borderColor="white"
			rounded="1rem"
			divider={<StackDivider borderColor="white" borderWidth="4px" />}>
			<Heading size="md" color="white">
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
