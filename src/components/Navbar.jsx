import React from "react";
import { Box,
        Grid,
        Button, 
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        useColorMode,
        IconButton,
        Heading, } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import Logo from '../assets/logo192.png'

export default function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();


    return (
        <div>
            <Grid display="grid" gridGap={2} gridAutoFlow="column" mt={5} >

                 {/* Logo */}
                <Box  flex={1} align="left" ml={10}>
                    <img src={Logo} width='50vx' height='50vx' alt='logo'/>
                    <Box  flex={1} align="left" ml={10}>
                        <Heading as='h3' size='lg'>Sondre Melhus</Heading>
                    </Box>
                </Box>

                
                {/* Hamburger menu  ml='auto' mr='10%' w={200}*/}    
                <Box flex={1} align="right" mr={10}>
                    <Button size='lg' variant={{ sm: 'sm', md: 'md' }} onClick={toggleColorMode} mr={5} border='1px' borderColor={colorMode === 'light' ? 'gray.600': 'gray.200'}>
                        {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                    </Button>

                    <Menu>
                        <MenuButton as={IconButton} size='lg' variant={{ sm: 'sm', md: 'md' }} pr={6} pl={6}  icon={<HamburgerIcon />} border='1px' borderColor={colorMode === 'light' ? 'gray.600': 'gray.200'}>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link as={ReachLink} to='/'>Home</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link Link as={ReachLink} to='/about'>About</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link as={ReachLink} to='/work'>Work</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link as={ReachLink} to='/contact'>Contact</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    
                </Box>
            </Grid>
        </div>
    )
}