import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import LoadAnimation from '@/components/load'
import CopyRight from '@/components/copyright'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechStylitix | Senior_Next_Js & Laravel | Front-End | Back-End | Make Web Application | Bug Solver',
  description: 'Hi , I’m Hamza Demnani 😃 .I have over 3years Of Designing end-to-end experience for financial products on web platforms . Working closely with managers, marketing specialists and developers. 🌟',
  keywords: 'Hamza Demnani,TechStylitix,Web Developer,Freelance,Remote,Morocco,Next.js, React.js, front-end, back-end, web application, bug solver',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {
        process.env.VERCEL_ENV !== "development" ? (<>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} />
          <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.GOOGLE_ANALYTICS_ID});
        `,
            }}
          />
        </>) : ''
      }

      <meta property="og:image" content="/TechStylitix.svg" />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <body className={`${inter.className} bg-background relative overflow-x-hidden md:overflow-y-auto`}>
        <LoadAnimation />
        <Navbar />
        {children}
        <CopyRight />
      </body>
    </html>
  )
}
