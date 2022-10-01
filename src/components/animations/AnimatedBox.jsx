import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBox ({children}, delay) {

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    return (
        <motion.box
                variants={{
                    delay: {delay},
                    hidden: { opacity: 0, y: -20 },
                    visible
                    }}
                >
                    { children }
        </motion.box>
    )
}