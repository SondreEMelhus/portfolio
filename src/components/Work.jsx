import React from "react";
import { Box, Heading, useColorMode } from "@chakra-ui/react";

import Navbar from "./Navbar";
import ProjectFrame from "./ProjectFrame";

export default function Work () {

    const { colorMode } = useColorMode();
    return (
        <div>
            <Navbar />
           <Box w='70%' bg={colorMode === 'light' ? '#70C3FF': '#F6511D'} color='black' border='2px' borderColor={colorMode === 'light' ? '#70C3FF': '#F6511D'} borderRadius='5px' fontSize='md' pt={5} pb={5} ml='auto' mr ='auto' mt='5%'>
                <Heading>Work</Heading>
           </Box>
           <Box>
               <ProjectFrame />
           </Box>
        </div>
    )
}