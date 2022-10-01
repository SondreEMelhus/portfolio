import React from "react";
import { motion } from "framer-motion";

export default function AnimatedArticle ({ children }) {

    return (
        <motion.article
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1.2 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
                    { children }
        </motion.article>
    )
}