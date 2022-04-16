import * as React from 'react'
import { Box, Flex, Text, Button, Menu, MenuButton, MenuList, MenuItem, IconButton, useMergeRefs } from "@chakra-ui/react";
import useSound from 'use-sound'
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"

export const MusicMenuItem = React.forwardRef((props, ref) => {
    const { src, song, text, colorScheme } = props
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)
    const [playingS1, setPlayingS1] = React.useState(false);
    const [playingS2, setPlayingS2] = React.useState(false);
    const [playingS3, setPlayingS3] = React.useState(false);
    const [playingS4, setPlayingS4] = React.useState(false);
    const [play, {stop}] = useSound(src)
    if (song === 1) {
        return (
            <MenuItem 
                onClick={() => {
                    playingS1 ? stop() : play()
                    setPlayingS1(!playingS1)
                }} 
                icon={playingS1 ? <AiFillPauseCircle/> : <AiFillPlayCircle/>} 
                placement='right'>
                <Text>{text}</Text>
            </MenuItem>
        )
    }
    if (song === 2) {
        return (
            <MenuItem 
                onClick={() => {
                    playingS2 ? stop() : play()
                    setPlayingS2(!playingS2)
                }} 
                icon={playingS2 ? <AiFillPauseCircle/> : <AiFillPlayCircle/>} 
                placement='right'>
                <Text>{text}</Text>
            </MenuItem>
        )
    }
    if (song === 3) {
        return (
            <MenuItem 
                onClick={() => {
                    playingS3 ? stop() : play()
                    setPlayingS3(!playingS3)
                }} 
                icon={playingS3 ? <AiFillPauseCircle/> : <AiFillPlayCircle/>} 
                placement='right'>
                <Text>{text}</Text>
            </MenuItem>
        )
    }
    if (song === 4) {
        return (
            <MenuItem 
                onClick={() => {
                    playingS4 ? stop() : play()
                    setPlayingS4(!playingS4)
                }} 
                icon={playingS4 ? <AiFillPauseCircle/> : <AiFillPlayCircle/>} 
                placement='right'>
                <Text>{text}</Text>
            </MenuItem>
        )
    }
})