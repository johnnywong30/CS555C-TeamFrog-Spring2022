import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import * as React from 'react'

const Measurement = ({ value, onChange, ...rest }) => {
    return (
        <RadioGroup onChange={onChange} value={value}>
            <Stack direction='row'>
                <Radio value='imperial'>Imperial</Radio>
                <Radio value='metric'>Metric</Radio>
            </Stack>
        </RadioGroup>
    )
}

export default Measurement;
