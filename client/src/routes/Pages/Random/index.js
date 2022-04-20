import React from 'react'
import { Container} from '@chakra-ui/react'

import Layout from '../../../components/layouts/Layout'
import RandomFrog from './randomFrog'

export const Random = () => {
    return (
        <Layout>
            <Container
                maxW="xl"
                py={{
                    base: '0',
                    sm: '2',
                }
                }
                px={{
                    base: '0',
                    sm: '0',
                }}
            >
                <RandomFrog/>
            </Container>
        </Layout>
    );
}