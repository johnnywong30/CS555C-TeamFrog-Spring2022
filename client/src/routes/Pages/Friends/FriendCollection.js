import React from "react";
import { SimpleGrid, Box, Image, Container, Heading} from "@chakra-ui/react";
import Layout from '../../../components/layouts/Layout'
const urls = ["https://imgur.com/cScfraF.png", "https://imgur.com/p5iRh9X.png", "https://imgur.com/cScfraF.png", "https://imgur.com/VJeksGH.png"]

export const Collection = () => {
    return (
        <Layout>
          <Heading color='white'>Frog Collection</Heading>
          <br/>
          <p class='collectionText'>Click your frog friend to pet them!</p>
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
                    <p>hello</p>
            </Container>
        </Layout>
      );
}
