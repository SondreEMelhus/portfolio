import React from "react";
import { Grid } from "@chakra-ui/react";
import BioEvent from "./BioEvent";

export default function BioRow ({ events }) {
    return (
        <Grid gridAutoFlow="column" > 
            {events.map((event, index) => (
                <BioEvent key={index + event.description} event={event} />
            ))}
        </Grid>
    )
}
