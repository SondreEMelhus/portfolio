import React from "react";
import { Box,
        Grid,
        Button, 
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        useColorMode,
        IconButton } from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import Logo from '../assets/logo192.png'

export default function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();

        //variant={{ md: 'md' }} 
    return (
        <div>
            <Grid display="grid" gridGap={2} gridAutoFlow="column" mt={5} >

                 {/* Logo */}
                <Box  ml='10%' mr='auto' w='100%' border='1px' borderColor='gray.200'>
                    <img src={Logo} width='50vx' height='50vx' alt='logo'/>
                </Box>

               
                    
                {/* Hamburger menu */}    
                <Box ml='auto' mr='10%' w={200}>
                    <Button size='lg' variant={{ sm: 'sm', md: 'md' }}  onClick={toggleColorMode} mr={5} border='1px' borderColor={colorMode === 'light' ? 'gray.600': 'gray.200'}>
                        {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                    </Button>
                    <Menu>
                        <MenuButton as={IconButton} size='lg' variant={{ sm: 'sm', md: 'md' }} pr={6} pl={6}  icon={<HamburgerIcon />} border='1px' borderColor={colorMode === 'light' ? 'gray.600': 'gray.200'}>
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