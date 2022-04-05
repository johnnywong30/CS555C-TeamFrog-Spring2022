import { Radio, RadioGroup, Stack, FormLabel } from '@chakra-ui/react'
import * as React from 'react'

const Measurement = ({ value, onChange, ...rest }) => {
    return (
        <>
            <FormLabel marginBottom="-12px" htmlFor={'measurement'}>
				Metric System
			</FormLabel>
            <RadioGroup id={'measurement'} onChange={onChange} value={value}>
                <Stack direction='row'>
                    <Radio value='imperial'>Imperial</Radio>
                    <Radio value='metric'>Metric</Radio>
                </Stack>
            </RadioGroup>
        </>
    )
}

export default Measurement;
