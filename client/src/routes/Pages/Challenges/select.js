import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'
import * as React from 'react'
import Choices from './choices'

const Select = () => {
    return (
        <Stack spacing="8">
            <Box
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
                <Stack spacing="3">
                    <VStack>
                        <Heading orientation="horizontal" size="lg">
                            Challenges
                        </Heading>
                    </VStack>
                    <Choices />
                </Stack>
            </Box>
        </Stack>
    )
}

export default Select;