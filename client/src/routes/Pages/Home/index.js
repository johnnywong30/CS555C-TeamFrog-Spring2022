import React, { useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';

import Hero from '../../../components/sections/Hero'
import Layout from '../../../components/layouts/Layout'
import Water from './water'
import Mongo from '../../../services/mongo';

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { email, title, titles, frog } = useSelector(({ auth }) => auth.user)
  const { store } = useSelector(({ auth }) => auth)

  const getFrogs = async () => dispatch(Mongo.getFrogList())

  useEffect(async () => {
    await getFrogs()
  }, []);

  const selectedFrog = store.find(({frogId}) => frogId === frog)
  const mysteryFrogUrl = 'https://imgur.com/VJeksGH.png'
  const frogUrl = selectedFrog !== undefined ? selectedFrog.url : mysteryFrogUrl
  return (
    <Layout>
      <Hero
        title="Frog Nanny"
        subtitle="Stay hydrated with these cute companions."
        // fix image please we need 8 bit frog
        image={frogUrl}
        imageCaption={titles[title]}
        ctaText="Give Your Frog Some Water"
        ctaAction={onOpen}
      />
      <Water isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}