import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack, bgGradient } from '@chakra-ui/react'

import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Field } from './Field'
import { PasswordField } from './PasswordField'

import Mongo from '../../../services/mongo';
import { notifyClear } from '../../../redux/actions/common'

const Register = () => {
    // hook to use redux actions
    const dispatch = useDispatch()
    const { msg, status, loading } = useSelector(({ common }) => common)

    // TODO: use useEffect to check cookies to see if we can login already

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany] = useState('')

    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName = (e) => setLastName(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleCompany = (e) => setCompany(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(Mongo.onRegister(firstName, lastName, email, password, company))
    }

    const handleClear = (e) => {
        e.preventDefault()
        dispatch(notifyClear())
    }


    return (
        <Box w='100%' h='100vh' bgGradient='linear(to-tl, green.200, purple.300)'>
            < Container
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

                <form onSubmit={handleSubmit}>
                    <Stack spacing="8">
                        <Stack spacing="6">
                            <Stack
                                spacing={{
                                    base: '2',
                                    md: '3',
                                }}
                                textAlign="center"
                            >
                            </Stack>
                        </Stack>
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
                            backgroundColor='white'
                        >
                            <Stack spacing="5">
                                {msg &&
                                    <Alert status={status} borderRadius="10">
                                        <AlertIcon />
                                        {msg}
                                        <CloseButton position='absolute' right='8px' top='8px' onClick={handleClear}/>
                                    </Alert>
                                }
                                <HStack spacing="1" justify="center">
                                    <Text color="muted">Already have an account?</Text>
                                    <Link to="/login">
                                        <Button variant="link" colorScheme="blue">
                                            Login
                                        </Button>
                                    </Link>
                                </HStack>
                                <Stack spacing="5">
                                    <Field required type={"first name"} value={firstName} onChange={handleFirstName} />
                                    <Field required type={"last name"} value={lastName} onChange={handleLastName} />
                                    <Field required type={"email"} value={email} onChange={handleEmail} />
                                    <PasswordField value={password} onChange={handlePassword} />
                                    <Field required type="company" value={company} onChange={handleCompany} />
                                </Stack>
                                <Stack spacing="6">
                                    <Button colorScheme={"green"} variant="solid" type="submit" isLoading={loading}>Register</Button>

                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </form>
            </Container >
        </Box>
    )
}

export default Register;