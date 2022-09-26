import React from "react";
import { Box, Grid, Stack, Divider, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

import  Navbar from "./navbar/Navbar";

export default function About () {

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
                        <Heading ml={5} mr={5} fontSize={{ base: '20px', md: '30px', lg: '40px' }}>Contact</Heading>           
                    </Box>
                </motion.box> 

                <motion.box
                    variants={{
                        delay: 0.8,
                        hidden: { opacity: 0, y: -20 },
                        visible
                    }}
                >
                    <Grid display="grid" align="center" gridGap={2} w='85%' gridAutoFlow="column" pt={2} pb={2} mt={5} ml="auto" mr="auto" >
                        <Box flex={1} align="left" fontSize='md'>
                        <Text align='left' ml={5} mr={5} fontSize={{ base: '16px', md: '22px', lg: '28px' }}>You can reach me by phone or mail: </Text>
                        <Stack direction='row' h='80px' p={4}>
                            <Divider orientation='vertical' />
                             <Heading fontSize={{ base: '14px', md: '20px', lg: '26px' }} flex={1} w='35%'>Phone:</Heading> 
                            <Text align='left' fontSize={{ base: '10px', md: '16px', lg: '22px' }} flex={1} w='100%'>992 47 973</Text>
                        </Stack>       
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

                    <Grid display="grid" align="center" gridGap={2} w='85%' gridAutoFlow="column" pt={2} pb={2} ml="auto" mr="auto" >
                        <Box flex={1} align="left" fontSize='md'>
                        <Stack direction='row' h='80px' p={4}>
                            <Divider orientation='vertical' />
                             <Heading fontSize={{ base: '14px', md: '20px', lg: '26px' }} flex={1} w='35%'>Mail:</Heading> 
                            <Text align='left' fontSize={{ base: '10px', md: '16px', lg: '22px' }} flex={1} w='100%'>sondre.melhus@gmail.com</Text>
                        </Stack>       
                        </Box>
                    </Grid>
                </motion.box>
            </motion.article>    
        </div>
    )
}