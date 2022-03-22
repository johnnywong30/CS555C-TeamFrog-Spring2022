import React from 'react'
import { Container, Grid, GridItem } from '@chakra-ui/react'


import Layout from '../../../components/layouts/Layout'
import Form from './Form'
import History from './History'

export const Profile = () => {
    return (
        <Layout>
            <Container
                maxW="lg"
                py={{
                    base: '12',
                    md: '24',
                }
                }
                px={{
                    base: '0',
                    sm: '8',
                }}
            >
                <Grid w='100%' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem rowSpan={1} colSpan={5} w='100%' h='100%'>
                        <Form />
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={5} w='100%' h='100%'>
                        <History />
                    </GridItem>
                </Grid>
                

                {/* // TODO Make water history section  */}
                {/* // TODO Make completed challenge history section  */}
                {/* // TODO Make title section here or put with frogs*/}
            </Container>
        </Layout>
    );
}