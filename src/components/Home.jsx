import React from "react";
import { Box, Heading, useColorMode } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Home () {

    const { colorMode } = useColorMode();

    return (
        <div>
            <Navbar />
            <Box w='70%' bg={colorMode === 'light' ? '#70C3FF': '#F6511D'} color='black' border='2px' borderColor={colorMode === 'light' ? '#70C3FF': '#F6511D'} borderRadius='5px' fontSize='md' pt={5} pb={5} ml='auto' mr ='auto' mt='5%'>
                <Heading mb={5}>Welcome!</Heading> <p>My name is Sondre Melhus, and Im a full-stack developer from Bergen, Norway 🇳🇴</p>
                </Box>
        </div>
    )
}