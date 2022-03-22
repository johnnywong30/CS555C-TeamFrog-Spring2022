import React from 'react'
import { Container} from '@chakra-ui/react'

import Layout from '../../../components/layouts/Layout'
import Add from './Add'

export const Friends = () => {
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
                <Add/>
            </Container>
        </Layout>
      );
}