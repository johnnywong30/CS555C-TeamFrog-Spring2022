import { Box, Button, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Field } from './Field'
import { PasswordField } from './PasswordField'

const Register = () => {
    // hook to use redux actions
    const dispatch = useDispatch()

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
        console.log({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            company: company
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
                            <Button colorScheme={"green"} variant="solid" type="submit" onSubmit={handleSubmit}>Register</Button>

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container >
    )
}

export default Register;