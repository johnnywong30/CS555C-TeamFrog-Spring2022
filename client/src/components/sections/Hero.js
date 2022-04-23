import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Center, Button, Flex, Image, Heading, Stack, Text, Progress } from "@chakra-ui/react";
import { fadeOutUp } from "react-animations";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
	fadeOutUp: {
		animationName: fadeOutUp,
		animationDuration: "2s",
	},
});

export default function Hero({ prestige, level, currentExp, requiredExp, title, subtitle, image, imageCaption, emotion, imageOnClick, soundText, ctaLink, ctaText, ctaAction, psText, psAction, expEarned, leveledUp, ...rest }) {
	return (
		<Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16} {...rest}>
			<Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
				<Heading as="h1" size="md" fontWeight="bold" color="primary.1000" textAlign={["center", "center", "left", "left"]} w={{ base: "85%", md: "85%" }} mb={10}>
					<Flex>
						{leveledUp ? (
							<Text className={css(styles.fadeOutUp)} color="lightgreen" fontSize={"1.25rem"}>
								Leveled Up!
							</Text>
						) : (
							`Level: ${level}`
						)}
						{expEarned > 0 && (
							<Text ml={5} className={css(styles.fadeOutUp)} color="yellow" fontSize={"1rem"}>
								+{expEarned} EXP
							</Text>
						)}
					</Flex>
					<Text fontSize={"1rem"}>Prestige: {prestige} </Text>
					<Progress mt={2} borderRadius=".3rem" hasStripe colorScheme="gray" size="sm" value={currentExp} min={0} max={requiredExp} />
				</Heading>

				<Heading as="h1" size="xl" fontWeight="bold" color="primary.1000" textAlign={["center", "center", "left", "left"]}>
					{title}
				</Heading>
				<Heading as="h2" size="md" color="primary.1000" opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
					{subtitle}
				</Heading>
				<Button colorScheme="gray" borderRadius="8px" py="4" px="4" lineHeight="1" size="md" onClick={ctaAction}>
					{ctaText}
				</Button>
				<Button colorScheme="gray" borderRadius="8px" py="4" px="4" lineHeight="1" size="md" onClick={psAction}>
					{psText}
				</Button>
			</Stack>
			<Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
				<Center>
					<Text color="white" fontWeight="bold" fontSize="2xl" textAlign={"center"} mr={9}>
						{emotion} {imageCaption}
					</Text>
				</Center>
				<Center>
					<Text color="white" fontWeight="bold" fontSize="2xl" textAlign={"center"} mr={9}>
						{soundText}
					</Text>
				</Center>
				<Image onClick={imageOnClick} src={image} size="100%" rounded="1rem" shadow="2xl" />
			</Box>
		</Flex>
	);
}

Hero.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	image: PropTypes.string,
	ctaText: PropTypes.string,
	ctaLink: PropTypes.string,
	soundText: PropTypes.string,
};

Hero.defaultProps = {
	title: "React landing page with Chakra UI",
	subtitle: "This is the subheader section where you describe the basic benefits of your product",
	image: "https://source.unsplash.com/collection/404339/800x600",
	ctaText: "Create your account now",
	ctaLink: "/signup",
};
