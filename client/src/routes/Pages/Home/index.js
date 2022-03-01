import React from 'react'

import Hero from '../../../components/sections/Hero'
import Layout from '../../../components/layouts/Layout'

export const Home = () => {
  return (
    <Layout>
      <Hero
        title="Frog Nanny"
        subtitle="Stay hydrated with these cute companions."
        // fix image please we need 8 bit frog
        image="https://imgur.com/cScfraF.png"
        ctaText="Give Your Frog Some Water"
        ctaLink="/hydrate"
      />
    </Layout>
  );
}