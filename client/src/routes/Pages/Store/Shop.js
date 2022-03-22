import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { Listing } from "./froglisting";

const Shop = () => {
	return (
		<Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16}>
			<HStack spacing="24px">
				<Box border="4px" borderColor="white" w={{ base: "80%", sm: "60%", md: "50%" }} h={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }} rounded="1rem" shadow="2xl" border-color="white">
					<Listing frogLink="https://i.imgur.com/VJeksGH.png" frogName="Random Frog 1" price="500"></Listing>
				</Box>
				<Box border="4px" borderColor="white" w={{ base: "80%", sm: "60%", md: "50%" }} h={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }} rounded="1rem" shadow="2xl" border-color="white">
					<Listing frogLink="https://i.imgur.com/VJeksGH.png" frogName="Random Frog 2" price="1000"></Listing>
				</Box>
				<Box border="4px" borderColor="white" w={{ base: "80%", sm: "60%", md: "50%" }} h={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }} rounded="1rem" shadow="2xl" border-color="white">
					<Listing frogLink="https://i.imgur.com/VJeksGH.png" frogName="Random Frog 3" price="2000"></Listing>
				</Box>
			</HStack>
		</Flex>
	);
};

export default Shop;
