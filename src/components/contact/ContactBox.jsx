import React from "react";
import { Box, Grid } from "@chakra-ui/react";

export default function ContactBox ({ children }) {
    
    return (
        <Grid display="grid" align="center" gridGap={2} w='85%' gridAutoFlow="column" pt={2} pb={2} ml="auto" mr="auto" >
            <Box flex={1} align="left" fontSize='md'>
                { children }     
            </Box>
        </Grid>
    )
}