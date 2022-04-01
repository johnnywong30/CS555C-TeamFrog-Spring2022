import React from 'react'
import { Grid, VStack, StackDivider, Container, useBreakpointValue, useColorModeValue,} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../../../components/layouts/Layout'
import Add from './Add'
import Friend from './Friend'

export const Friends = () => {
    const { email, friends } = useSelector(({ auth }) => auth.user)

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
                    sm: 'bg-surface'
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
                    <Grid>
                        {friends.map(friend => <Friend userEmail={email} friendEmail={friend}/>)}
                    </Grid>   
                </VStack>
            </Container>
            
        </Layout>
      );
}