import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import 'react-calendar-heatmap/dist/styles.css';
import './history.css'


import Mongo from '../../../services/mongo';
import { notifyClear } from '../../../redux/actions/common'

import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

const Heatmap = ({ data, measurement, ...rest }) => {
    return (
        <>
            <CalendarHeatmap
                // startDate={}
                // endDate={}
                values={data}
                classForValue={value => {
                    if (!value) return 'color-empty'
                    if (value.amount < 1) return 'color-water-0'
                    if (value.amount < 2) return 'color-water-1'
                    if (value.amount < 4) return 'color-water-2'
                    if (value.amount < 8) return 'color-water-3'
                    if (value.amount >= 8) return 'color-water-4'
                }}
                tooltipDataAttrs={value => {
                    return {
                        'data-tip': value.date ? 
                                    `${value.date}: Drank ${value.amount} ${measurement}`
                                    : `Did not drink anything this day`
                    }
                }}
                showWeekdayLabels={true}
            />
            <ReactTooltip />
        </>

    )
}

export default Heatmap;