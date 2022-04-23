import { Image, Box, Button, Stack, Text, useBreakpointValue, useColorModeValue, VStack, Heading, Divider, Center } from '@chakra-ui/react'
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import RandomService from '../../../services/random';

const RandomFrog = () => {
    const dispatch = useDispatch()
    const { randomFrogUrl } = useSelector(({ common }) => common)

    const generate = async () => {
        dispatch(RandomService.getRandomFrog());
    };

    return (
        <Stack spacing="8">
            <Box
                py={{
                    base: '0',
                    sm: '4',
                }}
                px={{
                    base: '4',
                    sm: '8',
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
                <Stack spacing="5">
                    <VStack>
                        <Heading orientation="horizontal" size="lg">
                            Random Frog Images
                        </Heading>
                        <Text orientation="horizontal" size="sm">
                            Please note that we do not have control over the image, as it is sourced from Reddit (r/frog).
                        </Text>
                        <Divider orientation='horizontal' />
                    </VStack>
                    <Stack spacing="5">
                        <Button onClick = {generate} colorScheme='green' size='sm'>Generate Random Frog Image</Button>
                        <Box boxSize='lg'>
                            <Center>
                                <Image boxSize='500px' objectFit='cover' src={randomFrogUrl} alt='Frog' />
                            </Center>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}

export default RandomFrog;