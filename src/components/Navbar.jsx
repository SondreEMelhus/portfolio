import React from "react";
import { Box,
        Grid,
        Button, 
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import Logo from '../assets/logo192.png'

export default function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <Grid display="grid" gridGap={2} gridAutoFlow="column" mt={5} >

                 {/* Logo */}
                <Box position='absolute' display='inline' ml={10}>
                    <img src={Logo} width='50vx' height='50vx' alt='logo'/>
                </Box>

                {/* Button to toggle theme */}
                <Box position='absolute'  display='inline' ml='85%'>
                <Button size='sm' variant={{ md: 'md' }} onClick={toggleColorMode}  >
                    {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                </Button>
                </Box>
                    
                {/* Hamburger menu */}    
                <Box position='absolute' display='inline' ml='90%' >
                    <Menu>
                        <MenuButton as={Button} size='sm' variant={{ md: 'md' }}  rightIcon={<HamburgerIcon />}>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Home</MenuItem>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Work</MenuItem>
                            <MenuItem>Contact</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Grid>
        </div>
    )
}