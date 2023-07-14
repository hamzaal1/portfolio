import * as motion from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
function Project({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col md:flex-row max-h-fit ps-8 md:ps-0 py-10">
            <div
                className="w-fit md:w-2/3 md:pe-8 mt-10">
                <h3 className='text-secondary text-2xl font-semibold mb-1'>{project.title}</h3>
                <p className="leading-7">
                    {project.body}
                </p>
                <div className="text-secondary mt-5">
                    {project.tools}
                </div>
                {
                    (project.preview?.code || project.preview?.live) && (
                        <div className="text-xl mt-2">
                            {project.preview?.code && <Link className="hover:text-secondary mx-2" href={`${project.preview.code}`} > <i className="fa-solid fa-code"></i> </Link>}
                            {project.preview?.live && <Link className="hover:text-secondary" href={`${project.preview.live}`} ><i className="fa-solid fa-up-right-from-square"></i> </Link>}
                        </div>
                    )
                }

            </div>
            <Image className="order-first md:order-last" src={`/images/work/${project.image}`} width={400} height={200} alt="dawya-naturs" />
        </motion.div>
    )
}

export default Project;