import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Box, Button, Flex, Image, Heading, Stack, Text, HStack, VStack, StackDivider } from "@chakra-ui/react";
import Mongo from "../../../services/mongo";
import { useDispatch, useSelector } from "react-redux";
import { notifyClear } from "../../../redux/actions/common";

export const Listing = ({ frogLink, frogName, price, own }) => {
	const dispatch = useDispatch();
	const { email, money } = useSelector(({ auth }) => auth.user);
	const { msg, status, loading } = useSelector(({ common }) => common);
	// const [purchased, setState] = useState({ colorScheme: "primary", text: price });

	let scheme = "primary";
	let text = price;

	if (own) {
		scheme = "red";
		text = "purchased";
	}

	const handleClear = e => {
		e.preventDefault();
		dispatch(notifyClear());
	};

	// const purchase = () => {
	// 	if (scheme === "primary") {
	// 		scheme = "red";
	// 		text = "purchased";
	// 		// setState({ colorScheme: "red", text: "Purchased" });
	// 		// TODO: fix backend componenets to allow for money change
	// 		// dispatch(Mongo.updateMoney(email, money - parseInt(price)));
	// 	}
	// };

	return (
		<VStack
			align="stretch"
			alignItems="center"
			spacing="4px"
			border="4px"
			borderColor="white"
			rounded="1rem"
			divider={<StackDivider borderColor="white" borderWidth="4px" />}>
			<Heading size="lg" color="white">
				{frogName}
			</Heading>
			<Image src={frogLink} boxSize="235px" />
			<Button h="50%" w="80%" colorScheme={scheme} borderRadius="8px" py="2" px="4" lineHeight="1" size="md">
				{text}
			</Button>
		</VStack>
	);
};

export default Listing;
