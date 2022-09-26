import React from "react";
import { Box, Grid, Stack, Divider, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Profile from '../../assets/profilePic.png'


import Navbar from "../navbar/Navbar";
import Bio from "./bio/Bio";

export default function Home () {

    const { colorMode } = useColorMode();

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
    
    return (
        <div>
            <Navbar />

            <motion.article
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1.2 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>

                <motion.box
                    variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible
                    }}
                >
                    <Box w='75%' align="center" bg={colorMode === 'light' ? '#70C3FF': '#F6511D'} border='2px' borderColor={colorMode === 'light' ? '#70C3FF': '#F6511D'} borderRadius='5px' fontSize='md' pt={5} pb={5} ml='auto' mr='auto' mt='5%'>
                        <Text ml={5} mr={5} fontSize={{ base: '10px', md: '18px', lg: '24px' }}>Hello, I'm a full-stack developer from Bergen, Norway!</Text>           
                    </Box>
                </motion.box> 

                <motion.box
                    variants={{
                        delay: 0.8,
                        hidden: { opacity: 0, y: -20 },
                        visible
                    }}
                >
                    <Grid display="grid" align="center" gridGap={2} w='85%' gridAutoFlow="column" pt={5} pb={5} mt={5} ml="auto" mr="auto" >
                        <Box flex={1} align="left" fontSize='md'>
                            <Stack direction='column' h='100px' p={4}>
                                <Heading align='right' fontSize={{ base: '20px', md: '30px', lg: '40px' }}>Sondre Melhus</Heading> 
                                <Divider orientation='horizontal' />
                                <Text align='right' mt={5} fontSize={{ base: '10px', md: '18px', lg: '24px' }}>Full-stack developer (Java, React, Angular)</Text>  
                            </Stack>         
                        </Box>
                        <Box flex={1} align="right" >
                            <img src={Profile} alt='Profile pic' p={10} align="left" height={100} width={100} borderImage='2px' borderRadius='10px' />         
                        </Box>
                    </Grid>
                </motion.box>

                <motion.box
                    variants={{
                    delay: 1.2,
                    hidden: { opacity: 0, y: -20 },
                    visible
                    }}
                >
                    <Box flex={1} align="left" w='85%' ml='auto' mr='auto' mt={10}>
                            <Heading align='left' fontSize={{ base: '20px', md: '30px', lg: '40px' }}>Work</Heading> 
                            <Text align='left' ml={5} mr={5} mt={5} fontSize={{ base: '10px', md: '18px', lg: '24px' }}>I am a full-stack developer base in Bergen, with a passion for cooking, playing the guitar and coding. 
                                                      I'm currently working for Experis Academy, and taking part in their full-stack Graduate program. 
                                                      In my spare time I love cooking delicious food from all over the world, play a pletora of songs on my guitar or play around with coding. </Text>           
                        </Box>
                </motion.box>

                <motion.box
                    variants={{
                    delay: 1.2,
                    hidden: { opacity: 0, y: -20 },
                    visible
                    }}
                >
                    <Bio />
                </motion.box>


            </motion.article>

        </div>
    )
}