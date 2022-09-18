import React from "react";
import { Box, Grid, GridItem, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Profile from '../assets/profilePic.png'


import Navbar from "./Navbar";

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
                    <Box w='50%' align="center" bg={colorMode === 'light' ? '#70C3FF': '#F6511D'} border='2px' borderColor={colorMode === 'light' ? '#70C3FF': '#F6511D'} borderRadius='5px' fontSize='md' pt={5} pb={5} ml='auto' mr='auto' mt='5%'>
                        <Text ml={5} mr={5}>Hello, I'm a full-stack developer from Bergen, Norway!</Text>           
                    </Box>
                </motion.box> 

                <motion.box
                    variants={{
                        delay: 0.8,
                        hidden: { opacity: 0, y: -20 },
                        visible
                    }}
                >
                    <Grid display="grid" align="center" gridGap={2} width='50%' gridAutoFlow="column" pt={5} pb={5} mt={5} ml="auto" mr="auto" >
                        <Box flex={1} align="left" fontSize='md'>
                            <Heading align='left'>Sondre Melhus</Heading> 
                            <Text align='left'>Full-stack developer (Java, React, Angular)</Text>           
                        </Box>
                        <Box flex={1} align="right" >
                            <img src={Profile} alt='Profile pic' p={10} align="center" height={100} width={100} borderImage='2px' borderRadius='10px' />         
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
                    <Box flex={1} align="left" w='50%' ml='auto' mr='auto' fontSize='md' mt={10}>
                            <Heading align='left'>Work</Heading> 
                            <Text align='left' ml={5} mr={5}>I am a full-stack developer base in Bergen, with a passion for cooking, playing the guitar and coding. 
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
                    <Box flex={1} align="left" w='50%' ml='auto' mr='auto' fontSize='md' mt={10}>
                            <Heading align='left'>Bio</Heading> 
                            
                            <Grid display="grid" gridGap={2}  align='left' templateColumns='repeat(1, 1fr)' mt={5} ml={5} mr={5}>
                               
                               <GridItem>
                                    <Heading as="h4" size='md' flex={1} w='50%'>1997</Heading> 
                                    <Text align='left' flex={1} w='50%'>Born in Bergen, Norway</Text>
                               </GridItem>

                               <GridItem>
                                    <Heading as="h4" size='md' flex={1}>1997</Heading> 
                                    <Text align='left' flex={1} >Born in Bergen, Norway</Text>
                               </GridItem>

                               <GridItem>
                                    <Heading as="h4" size='md' flex={1} >1997</Heading> 
                                    <Text align='left' flex={1} >Born in Bergen, Norway</Text>
                               </GridItem>
                                
                            </Grid>          
                        </Box>
                </motion.box>


            </motion.article>

        </div>
    )
}