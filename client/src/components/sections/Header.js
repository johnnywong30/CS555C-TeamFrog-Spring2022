import s1 from '../../constants/aquadungeondeepsea.mp3'
import s2 from '../../constants/boatquaytown.mp3'
import s3 from '../../constants/coketown.mp3'
import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { AiFillPlayCircle, AiFillPauseCircle, AiFillStepBackward, AiFillStepForward } from "react-icons/ai"
import Logo from "../ui/Logo";
import { useDispatch, useSelector } from 'react-redux'
import { startMusic, pauseMusic, unpauseMusic, changeMusic} from '../../redux/actions/music'
import useSound from 'use-sound'

const musicList = [s1, s2, s3]

const getSong = (currentSong) => {
    let newSong = Math.floor(Math.random() * musicList.length)
    while (currentSong === newSong) {
        newSong = Math.floor(Math.random() * musicList.length)
    }
    return newSong
}


const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
            {...rest}
        >
            <Link to={to}>{children}</Link>
        </Text>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const Header = (props) => {
    const [show, setShow] = React.useState(false);
    const toggleMenu = () => setShow(!show);
    const dispatch = useDispatch();
    const [firstSong, setFirstSong] = React.useState(true)
    const { playing, source, volume } = useSelector(({ music }) => music)
    // const [play, {pause}] = useSound(s1)
    const [song, setSong] = React.useState(0)
    const [playAudio1, pauseAudio1] = useSound(s1, {
        volume: 0.5
    })

    const [playAudio2, pauseAudio2] = useSound(s2, {
        volume: 0.5
    })

    const [playAudio3, pauseAudio3] = useSound(s3, {
        volume: 0.5
    })

    const songs = [
        { play: playAudio1, stop: pauseAudio1.stop},
        { play: playAudio2, stop: pauseAudio2.stop},
        { play: playAudio3, stop: pauseAudio3.stop}
    ]
    console.log(pauseAudio1)
    console.log(song)
    const skipSong = () => {
        if (song === 2) 
            setSong(0)
        else 
            setSong(song + 1)
    }

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
            {...props}
        >
            <Flex align="center">
                <MenuItem to="/froggers">
                    <Logo
                        w="100px"
                        color={["white", "white", "primary.500", "primary.500"]}
                        to={"/froggers"}
                    />
                </MenuItem>
                {/* music menu */}
                <IconButton
                    variant="link"
                    onClick={songs[song].play}
                    aria-label={"Play Music"}
                    icon={<AiFillPlayCircle/>}
                />
                <IconButton
                    variant="link"
                    onClick={pauseAudio1.stop}
                    aria-label={"Pause Music" }
                    icon={<AiFillPauseCircle/>}
                />
                <IconButton
                    variant="link"
                    onClick={skipSong}
                    icon={<AiFillStepForward/>}
                />
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                {show ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem to="/profile">Profile</MenuItem>
                    <MenuItem to="/collection">Frogs</MenuItem>
                    {/* probably make friends a small bar that pops up on the right side of the screen */}
                    {/* ux/ui thing instead of it being a separate page */}
                    <MenuItem to="/friends">Friends</MenuItem>
                    <MenuItem to="/store">Store</MenuItem>
                    <MenuItem to="/logout" isLast>
                        <Button
                            size="sm"
                            rounded="md"
                            color={["primary.500", "primary.500", "white", "white"]}
                            bg={["white", "white", "primary.500", "primary.500"]}
                            _hover={{
                                bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                            }}
                        >
                            Log Out
                        </Button>
                    </MenuItem>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;
