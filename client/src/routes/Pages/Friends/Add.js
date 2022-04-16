import { Alert, AlertIcon, CloseButton, Input, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, Button, useDisclosure, FormControl, FormLabel } from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Mongo from '../../../services/mongo';
import { notifyClear } from '../../../redux/actions/common'

const Add = () => {
    // hook to use redux actions
    const dispatch = useDispatch();
    const { msg, status } = useSelector(({ common }) => common)
    const { email } = useSelector(({ auth }) => auth.user)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ friendEmail, setFriendEmail ] = useState('')

    const handleFriendEmail = (e) => {
        setFriendEmail(e.target.value)
    }

    const handleClear = (e) => {
        e.preventDefault()
        dispatch(notifyClear())
    }

    const handleSubmit = (e) => {
        onClose()
        e.preventDefault()
        dispatch(Mongo.addFriend(email, friendEmail))
    }

    return (
            <Stack justifyContent="center" alignItems="center">
                {msg &&
                    <Alert status={status} borderRadius="10">
                        <AlertIcon />
                        {msg}
                        <CloseButton position='absolute' right='8px' top='8px' onClick={handleClear} />
                    </Alert>
                }
                <Button onClick={onOpen} px={{ base: '8'}} colorScheme='green'>Add Friend</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Enter a friend's email.</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Friend's Email</FormLabel>
                                <Input required type={"friend email"} value={friendEmail} placeholder="Friend's Email" onChange={handleFriendEmail}/>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={onClose} mr={4}>Cancel</Button>
                            <Button colorScheme='green' mr={3} type="submit" onClick={handleSubmit}>Submit</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
    )
}

export default Add;