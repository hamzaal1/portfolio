"use client"
import { motion } from "framer-motion";
import Image from "next/image";
function page() {
    return (
        <main className="container text-white py-10 grid grid-col-1 justify-center md:justify-start">
            <h1 className="text-4xl font-bold">My Skilles 💻</h1>
            <motion.div
                initial={{ opacity:0 , x:-20, y:20 }}
                animate={{ opacity:1,y:0 }}
                transition={{ delay:3.5 }}
                className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center py-10">
                <div className="showcase_skille mb-10">
                    <div className="bg-yellow-400 mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/js.png"} width={60} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">JavaScripts ES10</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-white mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/php.png"} width={70} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">PHP 8.*</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-primary mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/Tailwind.svg"} width={80} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Tailwind Css</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>

                <div className="showcase_skille mb-10">
                    <div className="bg-primary mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/react.webp"} width={90} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">React JS</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-white mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/next.svg"} width={60} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Next JS</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-purple-400 mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/redux.svg"} width={60} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Redux</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-sky-400 mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/firebase.png"} width={50} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Firebase</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-primary mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/jwt.svg"} width={50} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">JWT</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-white mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/Bootstrap.svg"} width={80} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Bootstrap</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-primary mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/Laravel.svg"} width={60} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Laravel</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-rose-400 mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/livewire.svg"} width={60} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Livewire</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-orange-300 mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/mysql.svg"} width={100} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">MySQL</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-white mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/mongodb.svg"} width={100} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">MongoDB</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-primary mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/agile_method.png"} width={70} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Agile ( Scrum )</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-white mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/github.png"} width={80} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Github</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
                <div className="showcase_skille mb-10">
                    <div className="bg-primary mb-1 grid items-center w-28 h-28 rounded-full mx-auto">
                        <Image className="mx-auto" src={"/images/skills/jira.svg"} width={60} height={10} alt="next Js" />
                    </div>
                    {/* description */}
                    <div className="w-2/3 mx-auto text-center">
                        <p className="text-secondary text-3xl font-medium">Jira</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    </div>
                </div>
            </motion.div>
        </main>
    )
}
export default page;