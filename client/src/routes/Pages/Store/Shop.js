import React, { useEffect } from "react";
import { Heading, Center, Alert, AlertIcon, CloseButton, SimpleGrid, Box, Flex, GridItem, Button, Menu, MenuButton, MenuList, MenuItem,} from "@chakra-ui/react";
import { Listing } from "./froglisting";
import { useDispatch, useSelector } from "react-redux";
import { notifyClear, setColor } from "../../../redux/actions/common";
import Mongo from "../../../services/mongo";

const Shop = () => {
	const dispatch = useDispatch();
	const { ownedFrogs } = useSelector(({ auth }) => auth.user);
	const { store } = useSelector(({ auth }) => auth);
	const { msg, status, loading, color } = useSelector(({ common }) => common);
	
	const getFrogs = () => {
		dispatch(Mongo.getFrogList())
	};

	const colorchange = (x) => {
		dispatch(setColor(x))
	};

	useEffect(() => getFrogs(), []);


	const frogs = [];
	for (let i = 0; i < store.length; i++) {
		const { _id, frogId, name, url, price } = store[i]
		const frogItem = {
			key: _id,
			frogId: frogId,
			name: name,
			colorId: "",
			url: url,
			price: price,
			owns: ownedFrogs.includes(frogId)
		}
		if (frogItem.name.includes("Green")){
			frogItem.colorId = "Green";
		}
		else if (frogItem.name.includes("Yellow")){
			frogItem.colorId = "Yellow";
		}
		else if (frogItem.name.includes("Blue")){
			frogItem.colorId = "Blue";
		}
		else if (frogItem.name.includes("Purple Spotted")){
			frogItem.colorId = "Purple Spotted";
		}
		else if (frogItem.name.includes("Orange")){
			frogItem.colorId = "Orange";
		}
		else{
			frogItem.colorId = "Purple";
		}
		frogs.push(frogItem);
	}

	const handleClear = e => {
		e.preventDefault();
		dispatch(notifyClear());
	};

	return (
		<Box>
			<Center marginBottom='10px'>
				<Heading orientation="horizontal" size="lg">
                    Frogs R Us
                </Heading>
			</Center>
			<Center marginBottom='10px'>
				<Menu>
					<MenuButton as={Button} colorScheme="blackAlpha">
						Select Frog Color
					</MenuButton>
					<MenuList>
						<MenuItem onClick={() => colorchange("Green")}>Green</MenuItem>
						<MenuItem onClick={() => colorchange("Yellow")}>Yellow</MenuItem>
						<MenuItem onClick={() => colorchange("Blue")}>Blue</MenuItem>
						<MenuItem onClick={() => colorchange("Purple")}>Purple</MenuItem>
						<MenuItem onClick={() => colorchange("Purple Spotted")}>Purple Spotted</MenuItem>
						<MenuItem onClick={() => colorchange("Orange")}>Orange Spotted</MenuItem>
					</MenuList>
				</Menu>
			</Center>
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
					{frogs.map(frog => {
					 	if(frog.colorId == color)
							return <Listing key={frog.key} frogLink={frog.url} frogName={frog.name} colorId = {frog.colorId} own={frog.owns} price={frog.price} />
					})}
				</SimpleGrid>
			</Flex>
		</Box>
	);
};

export default Shop;
