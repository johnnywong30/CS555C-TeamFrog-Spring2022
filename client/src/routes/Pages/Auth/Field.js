import { FormControl, FormLabel, Input, InputGroup, useMergeRefs } from '@chakra-ui/react'
import * as React from 'react'

const capitalize = (str) => {
    const label = str.trim().split(/\s+/)
    const caps = label.map(s => s[0].toUpperCase() + s.slice(1))
    return caps.join(' ')
}

export const Field = React.forwardRef((props, ref) => {
    const { type } = props
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)

    return (
        <FormControl>
            <FormLabel htmlFor={type}>{capitalize(type)}</FormLabel>
            <InputGroup>
                <Input
                    id={type}
                    ref={mergeRef}
                    name={type}
                    {...props}
                />
            </InputGroup>
        </FormControl>
    )
})
Field.displayName = 'Field'
