import React from 'react'
import { VStack, StackDivider, Container, useBreakpointValue, useColorModeValue,} from '@chakra-ui/react'

import Layout from '../../../components/layouts/Layout'
import Add from './Add'
import Friend from './Friend'

export const Friends = () => {
    return (
        <Layout>
          <Container
                py={{
                    base: '0',
                    sm: '8',
                }}
                px={{
                    base: '4',
                    sm: '10',
                }}
                bg={useBreakpointValue({
                    base: 'transparent',
                    sm: 'bg-surface',
                })}
                boxShadow={{
                    base: 'none',
                    sm: useColorModeValue('md', 'md-dark'),
                }}
                borderRadius={{
                    base: 'none',
                    sm: 'xl',
                }}
                backgroundColor = 'white'
            >
                <VStack 
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={4}
                    align='stretch'
                >
                    <Add/>
                        <Friend/>
                        <Friend/>
                </VStack>
            </Container>
            
        </Layout>
      );
}