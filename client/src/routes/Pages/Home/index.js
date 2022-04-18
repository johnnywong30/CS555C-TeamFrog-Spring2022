import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import useSound from 'use-sound';

import Hero from '../../../components/sections/Hero'
import Layout from '../../../components/layouts/Layout'
import Water from './water'
import Mongo from '../../../services/mongo';
import audio from '../../../../src/constants/frog.wav';
import moment from 'moment';

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { email, title, titles, frog, level, experience, requiredExp } = useSelector(({ auth }) => auth.user)
  const { expEarned, leveledUp } = useSelector(({ common }) => common )
  const { store } = useSelector(({ auth }) => auth)
  const [ play ] = useSound(audio);
  const [ time, setTime] = useState('');
  const getFrogs = async () => dispatch(Mongo.getFrogList())
  const [frogHealth, setHealth] = useState();
  let frogUrl = "";

  const getLatestTime = async () => {
    axios.get(`user/getLatestWaterTime/${email}`).then(response => {
        const timestamp = response.data;
        setTime(timestamp);
    });
  };

  function getTimeDistance() {
    if (time === 'None') {
      setHealth(2);
    }

    else {
      let distance = moment(time).toNow()
      console.log(distance)
      if (distance.search("minute") > 0 || distance.search("hour") > 0 || distance.search("second") > 0) {
        setHealth(0);
      }

      else if (distance.search("day") > 0) {
        setHealth(1);
      }

      else {
        setHealth(2);
      }
    }
  }

  
  useEffect(async () => {
    await getFrogs()
    await getLatestTime()
    getTimeDistance()
  }, [time]);

  const selectedFrog = store.find(({frogId}) => frogId === frog)
  const mysteryFrogUrl = 'https://imgur.com/VJeksGH.png'
  console.log(frogHealth)
  if (frogHealth === 1 || frogHealth === 2) {
    frogUrl = (frogHealth === 1) ? "https://imgur.com/f3svxvI.png" : "https://imgur.com/3dC8mcg.png"
  }

  else {
    console.log("hi", frogHealth)
    frogUrl = selectedFrog !== undefined ? selectedFrog.url : mysteryFrogUrl
  }

  return (
    <Layout>
      <Hero
        level={level}
        currentExp={experience}
        requiredExp={requiredExp}
        title="Frog Nanny"
        subtitle="Stay hydrated with these cute companions."
        // fix image please we need 8 bit frog
        image={frogUrl}
        imageCaption={titles[title]}
        imageOnClick={play}
        ctaText="Give Your Frog Some Water"
        ctaAction={onOpen}
        expEarned={expEarned}
        leveledUp={leveledUp}
      />
      <Water isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}