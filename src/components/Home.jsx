import React from "react";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Home () {

    return (
        <div>
            <Navbar />
            <Box w='80%' bg='#F6511D' color='black' border='2px' borderColor='#F6511D' borderRadius='5px' fontSize='md' pt={5} pb={5} ml='auto' mr ='auto' mt='10%'>Hello! My name is Sondre Melhus, and Im a full-stack</Box>
        </div>
    )
}