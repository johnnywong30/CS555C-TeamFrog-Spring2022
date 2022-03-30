import React from 'react'
import { VStack, StackDivider, Container, useBreakpointValue, useColorModeValue,} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../../../components/layouts/Layout'
import Add from './Add'
import Friend from './Friend'

export const Friends = () => {
    const { friends } = useSelector(({ auth }) => auth.user)

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
                minW='5xl'
            >
                <VStack 
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={4}
                    align='stretch'
                >
                    <Add/>
                        {friends.map(friend => <Friend email={friend}/>)}
                        {/* <Friend email={"hahsdasdasdasdi"} firstName={"yajsdajsddsfo"} lastName={"khasdfasdfasfdp"}/> */}
                </VStack>
            </Container>
            
        </Layout>
      );
}