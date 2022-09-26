import React from "react";
import {Button, 
        useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function NavbarThemeToggler () {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button w={[6, 8, 12]} h={[8, 10, 12]} onClick={toggleColorMode} mr={5} border='1px' borderColor={colorMode === 'light' ? 'gray.600': 'gray.200'}>
            {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
}