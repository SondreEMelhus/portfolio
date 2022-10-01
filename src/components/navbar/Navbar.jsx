import React from "react";
import { Box,
        Grid, 
        Heading, } from "@chakra-ui/react";

import Logo from '../../assets/logo192.png'
import NavbarDropdown from './NavbarDropdown';
import NavbarThemeToggler from "./NavbarThemeToggler";

export default function Navbar({ children }) {


    return (
        <>
            <Grid display="grid" position="sticky" top={0} gridGap={2} gridAutoFlow="column" mt={5} backdropFilter='auto' backdropBlur='10px'>

                 {/* Logo */}
                <Box  flex={1} align="left" ml={10}>
                    <img src={Logo} width='50vx' height='50vx' alt='logo'/>
                    <Box  flex={1} align="left" ml={10}>
                        <Heading as='h3' size='lg'>Sondre Melhus</Heading>
                    </Box>
                </Box>
  
                <Box flex={1} align="right" mr={10}>
                    <grid display="grid" gridGap={2} gridAutoFlow="column" mt={5}>
                        <box>
                            <NavbarThemeToggler  />
                        </box>
                        <box>
                            <NavbarDropdown />
                        </box>
                    </grid>
                </Box>
            </Grid>
            <div >
                { children }
            </div>
        </>
    )
}