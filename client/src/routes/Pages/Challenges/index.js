import React from 'react'
import { Container} from '@chakra-ui/react'


import Layout from '../../../components/layouts/Layout'
import Select from './select'

export const Challenges = () => {
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
                <Select />
            </Container>
        </Layout>
    );
}