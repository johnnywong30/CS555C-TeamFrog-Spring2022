import React from 'react'
import { useDisclosure } from '@chakra-ui/react'

import Hero from '../../../components/sections/Hero'
import Layout from '../../../components/layouts/Layout'
import Water from './water'

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Layout>
      <Hero
        title="Frog Nanny"
        subtitle="Stay hydrated with these cute companions."
        // fix image please we need 8 bit frog
        image="https://imgur.com/cScfraF.png"
        ctaText="Give Your Frog Some Water"
        ctaAction={onOpen}
      />
      <Water isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}