import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import PwaRegistration from '@/components/PwaRegistration'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const basePath = process.env.NODE_ENV === 'production' ? '/stefans-pro-cleaning' : ''

export const metadata: Metadata = {
  title: "Stefan's Pro Cleaning | Charlotte Residential & Commercial Cleaning",
  description:
    'Professional residential and commercial cleaning services in Charlotte, NC. Stress less — we clean the mess. Book your sparkle-guaranteed clean today!',
  keywords: [
    'cleaning service Charlotte NC',
    'residential cleaning',
    'commercial cleaning',
    'deep cleaning',
    'move in move out cleaning',
  ],
  icons: {
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/icons/icon-192.png`,
  },
  manifest: `${basePath}/manifest.json`,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Stefan's Pro Cleaning",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {children}
        <PwaRegistration />
      </body>
    </html>
  )
}
