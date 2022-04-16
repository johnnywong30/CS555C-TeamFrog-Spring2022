import * as React from 'react'
import { Box, Flex, Text, Button, Menu, MenuList, MenuButton, IconButton, useDisclosure, color } from "@chakra-ui/react";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useMergeRefs } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

export const FrogCharities = React.forwardRef((props, ref) => {
    const { colorScheme } = props
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
          <Button ref={btnRef} colorScheme={colorScheme} variant='ghost' size='sm' onClick={onOpen}>
            Frog Charities
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Frog Charities</DrawerHeader>
    
              <DrawerBody>
                <Text>hi</Text>
              </DrawerBody>
    
              <DrawerFooter>
                  <Text>We are not sponsored by these charities!</Text>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
    )
})