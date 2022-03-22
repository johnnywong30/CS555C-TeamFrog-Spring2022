import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import Mongo from '../../../services/mongo';
import { notifyClear } from '../../../redux/actions/common'
import { summary } from 'date-streaks';

const Streaks = () => {
    const dispatch = useDispatch()
    const { msg, status, loading } = useSelector(({ common }) => common)
    const { user } = useSelector(({ auth }) => auth)

    const dateList = user.waterHistory.map(stat => new Date(moment(stat.timestamp).format("MM-DD-YYYY")))
    const streak = summary(dateList).currentStreak
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
                backgroundColor='white'
            >
                <VStack>
                    <Heading orientation="horizontal" size="lg">
                        Streak: {streak}
                    </Heading>
                </VStack >
            </Box>

        </Stack>
    )
}

export default Streaks;