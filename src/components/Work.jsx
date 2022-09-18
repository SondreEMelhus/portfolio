import React from "react";
import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import ProjectFrame from "./ProjectFrame";

export default function Work () {

    const { colorMode } = useColorMode();
    return (
        <div>
            <Navbar />

            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                default: {
                    duration: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                },
                scale: {
                type: "just",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
                }
            }}
            >

                <Box w='70%' bg={colorMode === 'light' ? '#70C3FF': '#F6511D'} color='black' border='2px' borderColor={colorMode === 'light' ? '#70C3FF': '#F6511D'} borderRadius='5px' fontSize='md' pt={5} pb={5} ml='auto' mr ='auto' mt='5%'>
                        <Heading>Work</Heading>
                </Box>
                <Box>
                    <ProjectFrame />
                </Box>
            </motion.div>
        </div>
    )
}