import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDisclosure, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";

import Hero from "../../../components/sections/Hero";
import Layout from "../../../components/layouts/Layout";
import Water from "./water";
import Mongo from "../../../services/mongo";
import audio from "../../../../src/constants/frog.wav";
import moment from "moment";

export const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useDispatch();
	const { prestige, email, title, titles, frog, level, experience, requiredExp, waterHistory } = useSelector(({ auth }) => auth.user);
	const { expEarned, leveledUp } = useSelector(({ common }) => common);
	const { store } = useSelector(({ auth }) => auth);
	const [play] = useSound(audio);
	const [subtitleText, setSubtitle] = useState("");
	const [time, setTime] = useState("");
	const [dailyWater, setWater] = useState(0);
	const [emotion, setEmotion] = useState("");
	const getFrogs = async () => dispatch(Mongo.getFrogList());
	const [frogHealth, setHealth] = useState();
	let frogUrl = "";
	let text = "";

	if (level === 10) {
		if (prestige < 10) text = "Prestige Available";
		else text = "Maximum Prestige Reached";
	} else {
		text = "Reach Level 10 to Prestige";
	}

	const getLatestTime = async () => {
		axios.get(`user/getLatestWaterTime/${email}`).then(response => {
			const timestamp = response.data;
			setTime(timestamp);
			if (timestamp === "None") {
				setHealth(2);
			} else {
				let distance = moment(timestamp).toNow();
				if (distance.search("minute") > 0 || distance.search("hour") > 0 || distance.search("second") > 0) {
					setHealth(0);
				} else if (distance.search("day") > 0) {
					setHealth(1);
				} else {
					setHealth(2);
				}
			}
		});
	};

	const getDailyWater = async () => {
		axios.get(`water/getDaily/${email}`).then(response => {
			const water = response.data;
			setWater(water);
			if (water < 3) {
				setEmotion("Sad");
			} else if (water < 10) {
				setEmotion("Neutral");
			} else {
				setEmotion("Happy");
			}
		});
	};

	const handlePrestige = async e => {
		e.preventDefault();
		if (level === 10 && prestige < 10) dispatch(Mongo.updatePrestige(email));
	};

	function subtitleOnClick() {
		play();
		setSubtitle('Ribbit');
		setTimeout(() => setSubtitle(""), 500);
	}

	useEffect(async () => {
		await getLatestTime();
		await getDailyWater();
	}, [waterHistory, time]);

	useEffect(async () => {
		await getFrogs();
	}, [])

	const selectedFrog = store.find(({ frogId }) => frogId === frog);
	const mysteryFrogUrl = "https://imgur.com/VJeksGH.png";
	if (frogHealth === 1 || frogHealth === 2) {
		frogUrl = frogHealth === 1 ? "https://imgur.com/f3svxvI.png" : "https://imgur.com/3dC8mcg.png";
	} else {
		frogUrl = selectedFrog !== undefined ? selectedFrog.url : mysteryFrogUrl;
	}

	return (
		<Layout>
			<Hero
				level={level}
				prestige={prestige}
				currentExp={experience}
				requiredExp={requiredExp}
				title="Frog Nanny"
				subtitle="Stay hydrated with these cute companions."
				// fix image please we need 8 bit frog
				image={frogUrl}
				imageCaption={titles[title]}
				emotion={emotion}
				imageOnClick={subtitleOnClick}
				soundText={subtitleText}
				ctaText="Give Your Frog Some Water"
				ctaAction={onOpen}
				psText={text}
				psAction={handlePrestige}
				expEarned={expEarned}
				leveledUp={leveledUp}
			/>
			<Water isOpen={isOpen} onClose={onClose} />
		</Layout>
	);
};
