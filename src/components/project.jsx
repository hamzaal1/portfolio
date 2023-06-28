"use client";

import { motion } from "framer-motion";
import Image from "next/image";
function Project({project}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col md:flex-row max-h-fit ps-8 md:ps-0 py-10">
            <div
                className="w-fit md:w-2/3 pe-6 mt-10">
                <h3 className='text-secondary text-2xl font-semibold mb-1'>{project.title}</h3>
                <p className="leading-7 text-lg">
                    {project.body}
                </p>
                <div className="text-secondary mt-5">
                   {project.tools}
                </div>
            </div> 
            <Image className="order-first md:order-last" src={`/images/work/${project.image}`} width={400} height={200} alt="dawya-naturs" />
        </motion.div>
    )
}

export default Project;