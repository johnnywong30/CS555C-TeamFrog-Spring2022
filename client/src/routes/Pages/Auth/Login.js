import { Box, Button, Checkbox, Container, Divider, FormControl, FormLabel, FormErrorMessage, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Field } from './Field'
import { PasswordField } from './PasswordField'

const Login = () => {
    // hook to use redux actions
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log({
            email: email,
            password: password
        })
    }

    return (
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
                        {/* Logo can go here? */}
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
                    >
                        <Stack spacing="6">
                            <HStack spacing="1" justify="center">
                                <Text color="muted">Don't have an account?</Text>
                                <Link to="/register">
                                    <Button variant="link" colorScheme="blue">
                                        Register
                                    </Button>
                                </Link>
                            </HStack>
                            <Stack spacing="5">
                                <Field required type={"email"} value={email} onChange={handleEmail} />
                                <PasswordField value={password} onChange={handlePassword} />
                            </Stack>
                            <HStack justify="space-between">
                                {/* TODO Remember me */}
                                {/* <Checkbox defaultIsChecked>Remember me</Checkbox> */}
                                {/* TODO Forgot password and reset*/}
                                {/* <Button variant="link" colorScheme="blue" size="sm">
                            Forgot password?
                        </Button> */}
                            </HStack>
                            <Stack spacing="6">
                                <Button colorScheme={"green"} variant="solid" type="submit">Login</Button>

                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </form>
        </Container >
    )
}

export default Login;