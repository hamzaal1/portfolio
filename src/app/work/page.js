// "use client";
import Project from '@/components/project'
// import { useState } from 'react';
export const metadata = {
    title: 'My Work | TechStylitix',
}


function page() {
    const projects = [
        {
            id: crypto.randomUUID(),
            title: "Dawya Natures",
            body: "Create a full-stack website for a communication and nature adventure agency in the Jbela mountains.",
            tools: "Symfony . Tailwand Css . Bootstrap . JS . HTML5 . SASS . Css . php",
            image: "dawya-natures.png"
        },
        {
            id: crypto.randomUUID(),
            title: "E-Shop",
            body: "Create a full-stack website for a communication and nature adventure agency in the Jbela mountains.",
            tools: "Laravel . Livewire . Tailwand Css . Flowbite",
            image: "ecom-app.png"
        },
        {
            id: crypto.randomUUID(),
            title: "Trusted Isurance",
            body: "Create a full-stack website for a communication and nature adventure agency in the Jbela mountains.",
            tools: "Laravel . Tailwand Css",
            image: "isurance.png"
        },
        {
            id: crypto.randomUUID(),
            title: "Tabla.ma",
            body: "Create a full-stack website for a communication and nature adventure agency in the Jbela mountains.",
            tools: "Next JS . React JS . Prisma ORM . MongoDB . Flowbite . Css . Tailwand Css",
            image: "tabla-ma.png"
        }
    ];
    return (
        <main className="container text-white py-10 grid grid-col-1 justify-center md:justify-start">
            <h1 className="text-4xl font-bold">My Work 😄</h1>
            {
                projects.map(project => <Project key={project.id} project={project} />)
            }
        </main>
    )
}

export default page