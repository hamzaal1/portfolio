"use client";
import Image from "next/image";
import TextSlide from "./textslide";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5 }}
                className="flex-1">
                <div className="grid grid-cols-1  ps-7 md:ps-16 xl:justify-center">
                    <div className="text-3xl font-medium mb-2 md:mb-0">
                        <h1 className="text-white">
                            Hey 👋, I'm
                        </h1>
                        {/* <p className="text-secondary">Hamza Demnani</p> */}
                        <TextSlide />
                        <TextSlide delay={6000} Content="Web FullStack Developer😃" />
                    </div>
                    <div className="flex gap-3 text-white mt-3">
                        <Link target="_blank" href="https://www.upwork.com/freelancers/~0135208d21490a720b?viewMode=1">
                            <button className="bg-primary hover:bg-secondary hover:text-primary py-1 px-3 rounded-sm">Hire Me</button>
                        </Link>
                        <button
                            onClick={(e) => window.open("/hamza-demnani.pdf", "_blank")}
                            className="bg-primary hover:bg-secondary hover:text-primary py-1 px-3 rounded-sm">Watch My Resume</button>
                    </div>
                    <div className="flex gap-2 text-white mt-3">
                        <a href="www.linkedin.com/in/hamza-demnani" target="_blank">
                            <i className="fa-brands fa-linkedin text-4xl hover:text-slate-200"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-square-instagram text-4xl hover:text-slate-200"></i>
                        </a>
                        <a href="https://github.com/hamzaal1?tab=overview&from=2023-07-01&to=2023-07-06" target="_blank">
                            <i className="fa-brands fa-square-github text-4xl hover:text-slate-200"></i>
                        </a>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 10 }}
                transition={{ delay: 3.5 }}
                className="flex-1 mb-10 md:mb-0 order-first md:order-last">
                <Image className="mx-auto " src={`/images/hero-section-avatar.svg`} alt="me" width="350" height="35" />
            </motion.div>
        </div >
    )
}

export default Hero;