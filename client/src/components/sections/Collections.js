import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Button, Flex, Image, Heading, VStack, Text } from "@chakra-ui/react";
const frog1 = { name: "Starter Frog", link: "https://imgur.com/cScfraF.png" };
const frog2 = { name: "Random Frog", link: "https://i.imgur.com/VJeksGH.png" };
const frogs = [frog1, frog2];

export default function Collection({ handleClick }) {
	const [index, setIndex] = useState(0);

	const toggleFrog = () => {
		if (index === frogs.length - 1) setIndex(0);
		else setIndex(index + 1);
	};

	const frog = frogs[index];

	return (
		<Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16}>
			<VStack align="stretch" alignItems="center" spacing="20px">
				<Heading color="white">{frog.name}</Heading>
				<Image src={frog.link} size="100%" rounded="1rem" shadow="2xl" />
				<Button onClick={toggleFrog} w="100%" colorScheme="primary" borderRadius="8px" py="4" px="4" lineHeight="1" size="md">
					Change Frog
				</Button>
			</VStack>
		</Flex>
	);
}
