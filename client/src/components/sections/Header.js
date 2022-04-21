import s1 from '../../constants/aquadungeondeepsea.mp3'
import s2 from '../../constants/boatquaytown.mp3'
import s3 from '../../constants/coketown.mp3'
import s4 from '../../constants/snowdrop.mp3'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Menu, MenuList, MenuItem, MenuButton, IconButton, useDisclosure, color } from "@chakra-ui/react";
import { MusicMenuItem } from './MusicMenuItem'
import { AiFillDownCircle } from "react-icons/ai"
import { FaCoins, FaFrog, FaUserFriends, FaQuestionCircle } from 'react-icons/fa'
import { BsChevronDown, BsChevronRight } from 'react-icons/bs'
import { GiBlackBook } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { FrogCharities } from './FrogCharities';
import Logo from "../ui/Logo";

import { logoutAuthUser } from '../../redux/actions/auth';

import { useDispatch, useSelector } from 'react-redux'


const CustomMenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 5 }}
            display="block"
            color='white'
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
    const dispatch = useDispatch()
    const { money } = useSelector(({ auth }) => auth.user)
    const { gradientPos } = useSelector(({ common }) => common)
    const [show, setShow] = React.useState(false);
    const toggleMenu = () => setShow(!show);

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logoutAuthUser())
    }

    const colorScheme = gradientPos < 5 ? 'whiteAlpha' : 'blackAlpha'

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
                <CustomMenuItem to="/froggers">
                    <Logo
                        w="100px"
                        color={["white", "white", "white", "white"]}
                        to={"/froggers"}
                    />
                </CustomMenuItem>
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
                    <FrogCharities colorScheme={colorScheme} leftIcon={<BsChevronRight/>}/>
                    <CustomMenuItem to="/collection">
                        <Button leftIcon={<FaFrog />} colorScheme={colorScheme} variant='ghost' size='sm'>
                            Frogs
                        </Button>
                    </CustomMenuItem>
                    {/* <MenuItem to="/cyclefrogs">Changefrog</MenuItem> */}
                    <CustomMenuItem to="/challenges">
                        <Button leftIcon={<GiBlackBook />} colorScheme={colorScheme} variant='ghost' size='sm'>
                            Challenges
                        </Button>
                    </CustomMenuItem>
                    {/* probably make friends a small bar that pops up on the right side of the screen */}
                    {/* ux/ui thing instead of it being a separate page */}


                    {/* drawer for frogcharities */}
                    
                    {/* music refactoring into menu */}
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<BsChevronDown />}
                            colorScheme={colorScheme}
                            variant='ghost'
                            size='sm'
                            mb={{ base: 8, sm: 0 }}
                            mr={{ base: 0, sm: 5 }}
                        >
                            Music
                        </MenuButton>
                        <MenuList color='green'>
                            <MusicMenuItem src={s1} song={1} text={"Song 1"}></MusicMenuItem>
                            <MusicMenuItem src={s2} song={2} text={"Song 2"}></MusicMenuItem>
                            <MusicMenuItem src={s3} song={3} text={"Song 3"}></MusicMenuItem>
                            <MusicMenuItem src={s4} song={4} text={"Song 4"}></MusicMenuItem>
                        </MenuList>
                    </Menu>
                    
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<BsChevronDown />}
                            colorScheme={colorScheme}
                            variant='ghost'
                            size='sm'
                            mb={{ base: 8, sm: 0 }}
                            mr={{ base: 0, sm: 5 }}
                        >
                            Account
                        </MenuButton>
                        <MenuList>
                            <Link to="/profile">
                                <MenuItem icon={<CgProfile />} colorScheme='black'>
                                    <Text color='black'>
                                        Profile
                                    </Text>
                                </MenuItem>
                            </Link>
                            <Link to="/friends">
                                <MenuItem icon={<FaUserFriends />} colorScheme='black'>
                                    <Text color='black'>
                                        Friends
                                    </Text>
                                </MenuItem>
                            </Link>
                            <Link to="/random">
                                <MenuItem icon={<FaQuestionCircle />} colorScheme='black'>
                                    <Text color='black'>
                                    Random Frog
                                    </Text>
                                </MenuItem>
                            </Link>
                            <Link to="/store">
                                <MenuItem icon={<FaCoins />} colorScheme='black'>
                                    <Text color='black'>
                                        {money}
                                    </Text>
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                    <CustomMenuItem onClick={handleLogout} isLast>
                        <Button
                            size="sm"
                            rounded="md"
                            colorScheme={colorScheme}
                            variant='ghost'
                        >
                            Log Out
                        </Button>
                    </CustomMenuItem>
                </Flex>
            </Box >
        </Flex >
    );
};

export default Header;
