import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar'
import LoadAnimation from '@/components/load'
import CopyRight from '@/components/copyright'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechStylitix | Front-End | Back-End | Make Web Application | Bug Solver',
  description: 'A StartUp Company Founded By Hamza Demnani',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
