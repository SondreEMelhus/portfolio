import React from "react";
import { Box, 
        Heading,
        Text,
        useColorMode 
    } from "@chakra-ui/react";


export default function ProjectFrame () {

    const { colorMode } = useColorMode();
    
    return (
        <Box align="center" mt={10} w='85%' ml='auto' mr='auto' border='3px' borderRadius='5px' borderColor={colorMode === 'light' ? 'gray.600': 'gray.200'}>
            <Heading>Project title</Heading>
            <Box>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Box>
        </Box>
    )
}