import { FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Mongo from '../../../services/mongo';
import titleData from '../../../constants/titles';
import { notifyClear } from '../../../redux/actions/common'
import Lottie from 'reactjs-lottie'
import drinkWater from '../../../constants/lotties/drink-water.json'
import useKeypress from '../../../hooks/keypress';

const Water = ({ isOpen, onClose, ...rest }) => {
    // hook to use redux actions
    const dispatch = useDispatch()


    // Segments
    /*
    1 Cup: 30
    2 Cups: 40
    3 Cups: 50
    4 Cups: 57
    5 Cups: 64
    6 Cups: 71
    7 Cups: 78
    8 Cups: 85
    9 Cups: 94
    10 Cups: 105
    */

    const [amount, setAmount] = useState(0)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(1)

    // const [sequence, setSequence] = useState({
    //     segments: [[start, end]],
    //     forceFlag: true
    // })
    const [segments, setSegments] = useState([0, 1])
    const [direction, setDirection] = useState(1)


    const cupFrames = {
        negative: 1,
        0: 1,
        1: 31,
        2: 41,
        3: 51,
        4: 58,
        5: 65,
        6: 72,
        7: 79,
        8: 86,
        9: 95,
        10: 105,
        beyond: 120
    }

    useKeypress('ArrowUp', () => {
        handleWater(amount + 1)
    }, amount);

    useKeypress('ArrowDown', () => {
        handleWater(amount - 1)
    }, amount);

    const handleWater = (value) => {
        const num = Number(value)
        if (num < 0) return
        if (isNaN(num)) setAmount(0)
        if (num > 10) setAmount(11)
        else setAmount(num)

        let destination;
        if (num < 0 || num === '' || isNaN(num)) destination = cupFrames.negative
        if (num >= 0 && num <= 10) destination = cupFrames[num]
        if (num > 10) destination = cupFrames.beyond

        let start = segments[1]
        let end = destination
        if (start > end) setDirection(-1)
        else setDirection(1)
        setSegments([start, end])
    }


    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: drinkWater,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const { msg, status, loading } = useSelector(({ common }) => common)
    const { user } = useSelector(({ auth }) => auth)
    const { titles } = user

    // measurement is so annoying oof
    const measurement = user.measurement === 'imperial' ? 'cups' : 'liters'

    const { hydrated } = titleData

    const handleSubmit = async () => {
        const email = user.email
        // always keep amount in cups
        const waterAmount = measurement === 'cups' ? parseInt(amount) : parseInt(amount) * 4.22675
        dispatch(Mongo.insertWater(email, waterAmount))
        if (!titles.includes(hydrated)) {
            dispatch(Mongo.addTitle(email, hydrated))
        }
        onClose()
    }



    return (
        <Modal isOpen={isOpen} onClose={() => {
            onClose()
            handleWater(amount)
            setSegments([0, segments[1]])
        }} isCentered>
            <ModalOverlay />
            <ModalContent >
                <ModalHeader>Hydrate</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Amount in {measurement} </FormLabel>
                        <NumberInput value={amount} min={0} max={11} size='sm' onChange={handleWater}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <>
                        <Lottie
                            options={defaultOptions}
                            height={200}
                            width={200}
                            isClickToPauseDisabled={true} // here
                            segments={segments} // & here
                            direction={direction}
                            forceSegments={true}
                        />

                    </>
                </ModalBody>
                <ModalFooter>
                    <Button mr={4} onClick={() => {
                        onClose()
                        handleWater(amount)
                        setSegments([0, segments[1]])
                    }} >
                        Cancel
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