import React from "react";
import { Box, Heading, useColorMode } from "@chakra-ui/react";

import ProjectFrame from "./ProjectFrame";
import AnimatedArticle from "../animations/AnimatedArticle";
import AnimatedBox from "../animations/AnimatedBox";

export default function Work () {

    const { colorMode } = useColorMode();
    return (
        <div>
            <AnimatedArticle>

                <AnimatedBox delay={0}>
                    <Box w='85%' bg={colorMode === 'light' ? '#70C3FF': '#F6511D'} color='black' border='2px' borderColor={colorMode === 'light' ? '#70C3FF': '#F6511D'} borderRadius='5px' fontSize='md' pt={5} pb={5} ml='auto' mr ='auto' mt='5%'>
                            <Heading>Work</Heading>
                    </Box>       
                </AnimatedBox>

                <AnimatedBox delay= {0.8}>
                    <Box>
                        <ProjectFrame/>
                    </Box>
                </AnimatedBox>

            </AnimatedArticle>
        </div>
    )
}