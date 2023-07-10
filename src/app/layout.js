import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import LoadAnimation from '@/components/load'
import CopyRight from '@/components/copyright'
import Analytics from '@/components/analytics'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechStylitix | Senior_Next_Js & Laravel | Front-End | Back-End | Make Web Application | Bug Solver',
  description: 'Hi , I’m Hamza Demnani 😃 .I have over 3years Of Designing end-to-end experience for financial products on web platforms . Working closely with managers, marketing specialists and developers. 🌟',
  keywords: 'Hamza Demnani,TechStylitix,Web Developer,Freelance,Remote,Morocco,Next.js, React.js, front-end, back-end, web application, bug solver',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:image" content="/TechStylitix.svg" />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <body className={`${inter.className} bg-background relative overflow-x-hidden md:overflow-y-auto`}>
        <LoadAnimation />
        <Analytics />
        <Navbar />
        {children}
        <CopyRight />
      </body>
    </html>
  )
}
