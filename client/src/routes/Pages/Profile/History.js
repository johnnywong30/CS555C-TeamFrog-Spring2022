import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Heatmap from './Heatmap';
import { summary } from 'date-streaks';


import Mongo from '../../../services/mongo';
import { notifyClear } from '../../../redux/actions/common'

const History = () => {
    // hook to use redux actions
    const dispatch = useDispatch()
    const { msg, status, loading } = useSelector(({ common }) => common)
    const { user } = useSelector(({ auth }) => auth)

    const round = num => Math.round(num * 100) / 100
    const measurement = user.measurement === 'imperial' ? 'cups' : 'liters'
    const parseAmount = amount => measurement === 'cups' ? round(amount) : round(amount * 0.236588)

    const dateList = user.waterHistory.map(stat => new Date(moment(stat.timestamp).format("MM-DD-YYYY")))
    const streak = summary(dateList).currentStreak

    const cleaned = user.waterHistory.map(stat => {
        return {
            date: moment(stat.timestamp).format("MM-DD-YYYY"),
            timestamp: stat.timestamp,
            amount: parseAmount(stat.amount)
        }
    })

    let data = []
    for (const water of cleaned) {
        const obj = data.find(e => e.date === water.date)
        if (obj === undefined) {
            const day = {
                date: water.date,
                amount: water.amount,
                details: [{ date: water.timestamp, value: water.amount }]
            }
            data.push(day)
        }
        else {
            obj.amount = round(obj.amount + water.amount)
            obj.details = [...obj.details, { date: water.timestamp, value: water.amount }]
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
                backgroundColor='white'
            >
                <VStack m={4}>
                    <Heading orientation="horizontal" size="lg">
                        Water History
                    </Heading>
                    <Divider orientation='horizontal' />
                    <Text>
                        Current Streak: {streak}
                    </Text>
                </VStack >
                <Heatmap data={data} measurement={measurement} />
            </Box>

        </Stack>
    )
}

export default History;