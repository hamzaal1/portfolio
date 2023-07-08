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
            body: "Create a full-stack website for a communication and nature adventure agency in the Jbela mountains Boujmil.",
            tools: "Symfony . Tailwand Css . Bootstrap . JS . HTML5 . SASS . Css . php",
            image: "dawya-natures.png",
            preview:{
                live:"https://dawya-natures-experiences.ma/Dawya/",
                code:""
            }
        },
        {
            id: crypto.randomUUID(),
            title: "E-Shop",
            body: "The E-Shop app, built with Laravel, utilizes Livewire and Tailwind CSS. Livewire provides real-time interactivity without JavaScript, while Tailwind CSS offers a flexible styling approach. These technologies enhance performance, responsiveness, and visual appeal, creating a modern shopping experience.",
            tools: "Laravel . Livewire . Tailwand Css . Flowbite",
            image: "ecom-app.png",
            preview:{
                live:"",
                code:"https://github.com/hamzaal1/Laravel-FULLSTACK-ECOM"
            }
        },
        {
            id: crypto.randomUUID(),
            title: "Trusted Isurance",
            body: "The Trusted Insurance payment tracking app for car insurance is developed using Laravel and incorporates Tailwind CSS for a sleek design. It enables users to track payments, view payment history, and manage policy details effortlessly. With secure payment gateways and Laravel's powerful backend framework, the app offers a user-friendly interface for seamless car insurance payment management.",
            tools: "Laravel . Tailwand Css",
            image: "isurance.png",
            preview:{
                live:"",
                code:"https://github.com/hamzaal1/Insurance-app"
            }
        },
        {
            id: crypto.randomUUID(),
            title: "Tabla.ma",
            body: "Tabla.ma is a SaaS application designed for commercial restaurants, developed using React.js and Next.js for frontend development. It utilizes MongoDB as the database, while Sanity serves as the headless CMS (Content Management System). The application's user interface is styled using Tailwind CSS and Ant Design components. Prisma ORM is used for efficient and seamless database management. With these technologies combined, Tabla.ma offers a scalable and feature-rich solution for restaurant management, including menu customization, order tracking, and inventory management.",
            tools: "Next JS . React JS . Prisma ORM . MongoDB . Ant Design . Css . Tailwand Css",
            image: "tabla-ma.png",
            preview:{
                live:"",
                code:""
            }
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