import React from "react";
import { Heading, Text, Stack, Divider } from "@chakra-ui/react";

export default function BioEvent ({ event }) {

    return (
        <Stack direction='row' h='80px' p={4} key={ event.year + '-' + event.description }>
            <Divider orientation='vertical' />
            <Heading fontSize={{ base: '14px', md: '26px', lg: '28px' }} flex={1} w='35%'> { event.year } </Heading> 
            <Text align='left' fontSize={{ base: '10px', md: '18px', lg: '24px' }} flex={1} w='100%'>{ event.description }</Text>
        </Stack>
    )
}