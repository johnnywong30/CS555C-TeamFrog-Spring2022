import React from 'react'

import Hero from '../../../components/sections/Hero'
import Layout from '../../../components/layouts/Layout'

export const Store = () => {
    return (
        <Layout>
          <Hero
            title="Store"
            subtitle="Stay hydrated with these cute companions."
            // fix image please we need 8 bit frog
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/72ab65af-8fbb-435a-bce5-006678f410ce/dxuj30-67386eae-c494-42b7-9820-5113259aeb08.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyYWI2NWFmLThmYmItNDM1YS1iY2U1LTAwNjY3OGY0MTBjZVwvZHh1ajMwLTY3Mzg2ZWFlLWM0OTQtNDJiNy05ODIwLTUxMTMyNTlhZWIwOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Iv8T-1gyI2xcF4sXMoTtVvMDF9IbPsMjoH3vJDJYUzQ"
            ctaText="Give Your Frog Some Water"
            ctaLink="/hydrate"
          />
        </Layout>
      );
}