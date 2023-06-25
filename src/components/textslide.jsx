"use client";
import React, { useEffect, useState } from 'react';
import './scss/textSlide.scss';
import { motion } from 'framer-motion';
function TextSlide({ delay = 3500, Content = "hamza demnani" }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, delay);
        return () => clearTimeout(timeout); // Clear the timeout when the component unmounts
    }, []);

    return (
        <div className="box">
            {isMounted &&(
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    // transition={{ delay: 1 }}
                    className="title">
                    <span className="block"></span>
                    <h1 className="text-secondary capitalize">{Content}</h1>
                </motion.div>
            )}
        </div>
    );
}

export default TextSlide;
