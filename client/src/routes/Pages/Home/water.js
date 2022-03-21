import { FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Mongo from '../../../services/mongo';
import { notifyClear } from '../../../redux/actions/common'

const Water = ({ isOpen, onClose, ...rest }) => {
    // hook to use redux actions
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(1)
    const handleWater = value => setAmount(value)

    const { msg, status, loading } = useSelector(({ common }) => common)
    const { user } = useSelector(({ auth }) => auth)

    const measurement = user.measurement === 'imperial' ? 'cups' : 'liters'

    const handleSubmit = async () => {
        const email = user.email
        // always keep amount in cups
        const waterAmount = measurement === 'cups' ? parseInt(amount) : parseInt(amount) * 4.22675
        dispatch(Mongo.insertWater(email, waterAmount))
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Hydrate</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Amount in {measurement} </FormLabel>
                        <NumberInput value={amount} min={0} size='sm' onChange={handleWater}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button mr={4} onClick={onClose}>
                        Close
                    </Button>
                    <Button isLoading={loading} onClick={handleSubmit}>
                        Drink
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default Water;