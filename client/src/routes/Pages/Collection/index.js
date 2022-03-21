import React from 'react'

import { SimpleGrid, Box, Image, Container, Heading} from "@chakra-ui/react";
import Hero from '../../../components/sections/Hero'
import Layout from '../../../components/layouts/Layout'

const urls = ["https://imgur.com/cScfraF.png", "https://imgur.com/p5iRh9X.png", "https://imgur.com/cScfraF.png", "https://imgur.com/cScfraF.png"]

export const Collection = () => {
    return (
        <Layout>
          <Heading color='white'>Frog Collection</Heading>
          <Container maxW='container.md'
                py={{
                    base: '20',
                    md: '24',
                }
                }
                px={{
                    base: '0',
                    sm: '2',
                }}>
            <SimpleGrid columns={4} spacingX='10px' spacingY='10px'>
            {urls.map((url) => (
              <Box height='225px'>
                <Image
                  src={url}
                />
              </Box>))}
            </SimpleGrid>
          </Container>
          
        </Layout>
      );
}