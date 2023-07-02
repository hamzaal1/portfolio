import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar'
import LoadAnimation from '@/components/load'
import CopyRight from '@/components/copyright'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechStylitix : Front-End | Back-End | Make Web Application | Bug Solver',
  description: 'Hi , I’m Hamza Demnani 😃 .i have over 3years Of Designing end- to - end experience with 🖤 for financial products on web platforms.Working closely with managers, marketing specialists and developers. 🌟',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content={"/TechStylitix.svg"} />
      </head>
      <body className={`${inter.className} bg-background md:overflow-y-auto`}>
        <LoadAnimation />
        <Navbar />
        <Sidebar />
        {children}
        <CopyRight />
      </body>
    </html>
  )
}
