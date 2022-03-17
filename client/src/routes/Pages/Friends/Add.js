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
        console.log(friendEmail)   
    }

    const handleClear = (e) => {
        e.preventDefault()
        dispatch(notifyClear())
    }

    const handleSubmit = (e) => {
        console.log(friendEmail)
        e.preventDefault()
        dispatch(Mongo.addFriend(email, friendEmail))
    }

    return (
            <Stack>
                <Button onClick={onOpen}>Add Friend</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    {msg &&
                        <Alert status={status} borderRadius="10">
                            <AlertIcon />
                            {msg}
                            <CloseButton position='absolute' right='8px' top='8px' onClick={handleClear} />
                        </Alert>
                    }
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
                            <Button colorScheme='green' mr={3} type="submit" onClick={handleSubmit}>Add</Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
    )
}

export default Add;