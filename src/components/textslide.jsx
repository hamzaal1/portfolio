"use client";
import React, { useEffect, useState } from 'react';
import './scss/textSlide.scss';

function TextSlide({ delay = 3500 , Content ="hamza demnani" }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, delay);
        return () => clearTimeout(timeout); // Clear the timeout when the component unmounts
    }, []);

    return (
        <div className="box">
            {isMounted && (
                <div className="title">
                    <span className="block"></span>
                    <h1 className="text-secondary capitalize">{ Content }</h1>
                </div>
            )}
        </div>
    );
}

export default TextSlide;
