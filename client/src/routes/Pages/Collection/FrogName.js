import { Alert, AlertIcon, CloseButton, Input, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, Button, useDisclosure, FormControl, FormLabel } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Mongo from '../../../services/mongo';
import titleData from '../../../constants/titles';
import { notifyClear } from '../../../redux/actions/common'

export const FrogName = React.forwardRef((props, ref) => {
    const { frogId, frogName } = props
    // hook to use redux actions
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { msg, status, loading } = useSelector(({ common }) => common)
    const { email } = useSelector(({ auth }) => auth.user)
    const [ newFrogName, setFrogName ] = useState('')

    const handleFrogName = (e) => {
        setFrogName(e.target.value)
    }

    const handleSubmit = (e) => {
        dispatch(Mongo.updateFrogName(email, frogId, newFrogName))
        onClose()
    }

    return (
        <Stack justifyContent="center" alignItems="center">
            <Button onClick={onOpen} px={{ base: '8'}} colorScheme='green'>{frogName}</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Frog Name</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>New Name</FormLabel>
                            <Input required type={"frog name"} value={newFrogName} placeholder={frogName} onChange={handleFrogName}/>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={4} onClick={onClose}>
                            Close
                        </Button>
                        <Button isLoading={loading} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    )
})
