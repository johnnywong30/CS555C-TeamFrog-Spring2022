import React from 'react'
import { Container, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'


import Layout from '../../../components/layouts/Layout'
import Form from './Form'
import History from './History'

export const Profile = () => {
    return (
        <Layout>
            <SimpleGrid columns={3} spacing={3} minW='50%' mb={5}>
                <GridItem rowSpan={1} colSpan={3}>
                    <Form />
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <History />
                </GridItem>
                {/* // TODO Make completed challenge history section  */}
                {/* // TODO Make title section here or put with frogs*/}
            </SimpleGrid>




        </Layout >
    );
}