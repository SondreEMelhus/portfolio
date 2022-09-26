import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import BioRow from "./BioRow";

export default function Bio () {

    const bioArray = [[{
                year: 1997, 
                description: 'Born in Bergen, Norway'
            }], 
            [{
                year: 2016, 
                description: 'Finished High-school'
            }],
            [{
                year: 2017,
                description: "Finished military service in His Majesty the King's Drill Squad "
            }],
            [{
                year: 2018,
                description: 'Started Bachelors degree in Computer Science at Høgskulen på Vestlandet, Bergen'
            }],
            [{
                year: 2022,
                description: 'Finished Bachelors degree with a specialisation in Software development'
            }],
            [{
                year: 'Presently',
                description: 'Working as a Full-stack developer for Experis Academy Norway, in Bergen'
            }]
        ];

    return (
        <Box w='85%' flex={1} align="left" ml='auto' mr='auto' fontSize='md' mt={10}>
            <Heading align='left' fontSize={{ base: '20px', md: '30px', lg: '40px' }}>Bio</Heading> 
            
            <Grid display="grid" gridGap={2}  align='left' templateColumns='repeat(1, 1fr)' ml={5} mr={5} mt={3} >
                {
                    bioArray.map((row, index) => {
                        return (
                        <BioRow key={index + '_' + row + 2} events={row} />
                    )})
                }
            </Grid>          
        </Box>
    )
}