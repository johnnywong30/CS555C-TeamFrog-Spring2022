import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Box, Button, Flex, Image, Heading, Stack, Text, HStack, VStack } from "@chakra-ui/react";
import Mongo from "../../../services/mongo";
import { useDispatch, useSelector } from "react-redux";
import { notifyClear } from "../../../redux/actions/common";

export const Listing = ({ frogLink, frogName, price }) => {
	const dispatch = useDispatch();
	const { email, money } = useSelector(({ auth }) => auth.user);
	const { msg, status, loading } = useSelector(({ common }) => common);
	const [purchased, setState] = useState({ colorScheme: "primary", text: price });

	const handleClear = e => {
		e.preventDefault();
		dispatch(notifyClear());
	};

	const purchase = () => {
		if (purchased.colorScheme === "primary") {
			setState({ colorScheme: "red", text: "Purchased" });
			// TODO: fix backend componenets to allow for money change
			// dispatch(Mongo.updateMoney(email, money - parseInt(price)));
		}
	};

	return (
		<VStack align="stretch" alignItems="center" spacing="4px">
			<Heading color="white">{frogName}</Heading>
			<Image src={frogLink} size="100%" />
			<Button onClick={purchase} w="100%" colorScheme={purchased.colorScheme} borderRadius="8px" py="4" px="4" lineHeight="1" size="md">
				{purchased.text}
			</Button>
		</VStack>
	);
};

export default Listing;
