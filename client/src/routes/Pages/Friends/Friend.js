import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, CloseButton, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, useBreakpointValue, useColorModeValue, VStack, useMergeRefs } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Mongo from '../../../services/mongo';

export const Friend = () = React.forwardRef((props, ref) => {
    const { email } = props;
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)

})
