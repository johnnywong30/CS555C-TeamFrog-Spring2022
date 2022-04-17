import React, { useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import useSound from 'use-sound';

import Hero from '../../../components/sections/Hero'
import Layout from '../../../components/layouts/Layout'
import Water from './water'
import Mongo from '../../../services/mongo';
import audio from '../../../../src/constants/frog.wav';

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { email, title, titles, frog, level, experience, requiredExp } = useSelector(({ auth }) => auth.user)
  const { expEarned, leveledUp } = useSelector(({ common }) => common )
  const { store } = useSelector(({ auth }) => auth)
  const [ play ] = useSound(audio);

  const getFrogs = async () => dispatch(Mongo.getFrogList())

  useEffect(async () => {
    await getFrogs()
  }, []);

  const selectedFrog = store.find(({frogId}) => frogId === frog)
  const mysteryFrogUrl = 'https://imgur.com/VJeksGH.png'
  const frogUrl = selectedFrog !== undefined ? selectedFrog.url : mysteryFrogUrl

  // requiredExp = level * level * 50

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