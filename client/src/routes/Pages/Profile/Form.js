import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Mongo from '../../../services/mongo';
import { notifyClear } from '../../../redux/actions/common'
import { Field } from './Field';
import Measurement from './Measurement';

const Form = () => {
    // hook to use redux actions
    const dispatch = useDispatch()
    const { email, firstName, lastName, company, measurement } = useSelector(({ auth }) => auth.user)
    const { msg, status, loading } = useSelector(({ common }) => common)

    const handleClear = (e) => {
        e.preventDefault()
        dispatch(notifyClear())
    }
 
    const handleFirstName = (e) => {
        if (e !== firstName && e.trim().length > 0) {
            dispatch(Mongo.updateFirstName(email, e))
        }
    }

    const handleLastName = (e) => {
        if (e !== lastName && e.trim().length > 0) {
            dispatch(Mongo.updateLastName(email, e))
        }
    }

    const handleCompany = (e) => {
        if (e !== company && e.trim().length > 0) {
            dispatch(Mongo.updateCompany(email, e))
        }
    }

    const handleMeasurement = (e) => {
        if (e !== measurement && e.trim().length > 0) {
            dispatch(Mongo.updateMeasurement(email, e))
        }
    }

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
                <Stack spacing="5">
                    {msg &&
                        <Alert status={status} borderRadius="10">
                            <AlertIcon />
                            {msg}
                            <CloseButton position='absolute' right='8px' top='8px' onClick={handleClear} />
                        </Alert>
                    }
                    <VStack>
                        <Heading orientation="horizontal" size="lg">
                            Profile
                        </Heading>
                        <Divider orientation='horizontal' />
                    </VStack>
                    <Stack spacing="5">
                        <Field defaultValue={firstName} onSubmit={handleFirstName} id={'firstName'} label={'First Name'}/>
                        <Field defaultValue={lastName} onSubmit={handleLastName} id={'lastName'} label={'Last Name'}/>
                        <Field defaultValue={company} onSubmit={handleCompany} id={'company'} label={'Company'}/>
                        <Measurement value={measurement} onChange={handleMeasurement} />
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Form;
