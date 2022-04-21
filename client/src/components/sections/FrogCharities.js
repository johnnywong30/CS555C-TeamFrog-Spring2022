import * as React from 'react'
import { Image, Stack, Text, Button, useDisclosure, Link } from "@chakra-ui/react";
import { StackDivider, Divider, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useMergeRefs } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Lottie from 'reactjs-lottie'
import froggyAnimation from '../../constants/lotties/froggy.json'

export const FrogCharities = React.forwardRef((props, ref) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: froggyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const { colorScheme, leftIcon, rightIcon } = props
  const inputRef = React.useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme={colorScheme}
        variant='ghost'
        size='sm'
        onClick={onOpen}
        mb={{ base: 8, sm: 0 }}
        mr={{ base: 0, sm: 5 }}
        leftIcon={leftIcon ? leftIcon : <></>}
        rightIcon={rightIcon ? rightIcon : <></>}
      >
        Frog Charities
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Frog Charities</DrawerHeader>

          <DrawerBody overflow='hidden'>
            <Text>Please consider donating to these frog charities!</Text>
            <Divider orientation='horizontal' sm='xl' p='2' />
            <Stack
              divider={<StackDivider borderColor='gray.200' />}
              pt='2'
            >
              <Link href='https://www.froglife.org/' isExternal>
                Frog Life <ExternalLinkIcon mx='2px' />
              </Link>
              <Link href='https://www.amphibians.org/' isExternal>
                Amphibian Survival Alliance <ExternalLinkIcon mx='2px' />
              </Link>
              <Link href='https://www.amphibianfoundation.org/' isExternal>
                Amphibian Foundation <ExternalLinkIcon mx='2px' />
              </Link>
              <Link href='https://www.rainforesttrust.org/saving-endangered-species/frogs/' isExternal>
                Rain Forest Trust <ExternalLinkIcon mx='2px' />
              </Link>
              <Image src='https://imgur.com/cScfraF.png' alt='frog image'></Image>
              <Lottie
                options={defaultOptions}
                height={170}
                width={170}
                isClickToPauseDisabled={true} // here
              >
              </Lottie>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Text>Frog Nanny is not sponsored by these charities.</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
})