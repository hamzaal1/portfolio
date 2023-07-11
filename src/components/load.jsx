"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import './css/loadAnimation.css';

function LoadAnimation() {
    const [isMounted, setIsMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true); // Initially assuming it's desktop
    const animationRef = useRef(null);
    const pathname = usePathname();
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768); // Adjust the breakpoint as needed
        };
        handleResize()

        setIsMounted(false)
        const animationElement = animationRef.current;
        const handleAnimationEnd = () => {
            setIsMounted(true);
        };

        animationElement.addEventListener('animationend', handleAnimationEnd);

        return () => {
            animationElement.removeEventListener('animationend', handleAnimationEnd);
        };
    }, [pathname, isDesktop]);

    return (
        <div className={`${isMounted ? 'hidden' : ''} fixed top-0 left-0 min-w-full min-h-screen z-50`}>
            <div id="main-container" className="transition-all ease-out opacity-1 min-h-screen min-w-full relative group-animation">
                <div className="absolute min-h-screen min-w-full bg-secondary second-load">
                </div>
                <div
                    ref={animationRef}
                    className="transform transition-all translate-y-0 ease-out absolute min-h-screen min-w-full bg-background first-load grid grid-col-1 items-center justify-center">
                    {isDesktop ? (
                        <video
                            width={450}
                            height={250}
                            className={`hidden md:block ${isMounted ? 'hidden' : ''}`}
                            src="/images/TechStylitix.mp4"
                            loop
                            muted
                            autoPlay
                        ></video>
                    ) : (
                        <video
                            width={350}
                            height={150}
                            className={`block md:hidden ${isMounted ? 'hidden' : ''}`}
                            src="/images/TechStylitix.mp4"
                            loop
                            muted
                            autoPlay
                        ></video>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoadAnimation;