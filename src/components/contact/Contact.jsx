import React from "react";
import { Box, Stack, Divider, Heading, Text, useColorMode } from "@chakra-ui/react";

import AnimatedArticle from "../animations/AnimatedArticle";
import AnimatedBox from "../animations/AnimatedBox";
import ContactBox from "./ContactBox";

export default function About () {

    const { colorMode } = useColorMode();

    return (
        <>
            <AnimatedArticle>

                <AnimatedBox delay={0}>
                    <Box w='75%' align="center" bg={colorMode === 'light' ? '#70C3FF': '#F6511D'} border='2px' borderColor={colorMode === 'light' ? '#70C3FF': '#F6511D'} borderRadius='5px' fontSize='md' pt={5} pb={5} ml='auto' mr='auto' mt='5%'>
                        <Heading ml={5} mr={5} fontSize={{ base: '20px', md: '30px', lg: '40px' }}>Contact</Heading>           
                    </Box>
                </AnimatedBox> 

                <AnimatedBox delay={0.8}>
                    <ContactBox>
                        <Text align='left' ml={5} mr={5} fontSize={{ base: '16px', md: '22px', lg: '28px' }}>You can reach me by phone or mail: </Text>
                        <Stack direction='row' h='80px' p={4}>
                            <Divider orientation='vertical' />
                                <Heading fontSize={{ base: '14px', md: '20px', lg: '26px' }} flex={1} w='35%'>Phone:</Heading> 
                            <Text align='left' fontSize={{ base: '10px', md: '16px', lg: '22px' }} flex={1} w='100%'>992 47 973</Text>
                        </Stack>       
                    </ContactBox>
                </AnimatedBox>

                <AnimatedBox delay={1.2}>
                    <ContactBox>
                        <Stack direction='row' h='80px' p={4}>
                            <Divider orientation='vertical' />
                             <Heading fontSize={{ base: '14px', md: '20px', lg: '26px' }} flex={1} w='35%'>Mail:</Heading> 
                            <Text align='left' fontSize={{ base: '10px', md: '16px', lg: '22px' }} flex={1} w='100%'>sondre.melhus@gmail.com</Text>
                        </Stack>       
                    </ContactBox>
                </AnimatedBox>

            </AnimatedArticle>   
        </>
    )
}