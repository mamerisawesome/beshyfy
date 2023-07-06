import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beshyfy',
  description: 'Transform your sentences with cartwheels',
  keywords: ['bakit', 'malungkot', 'beshy', 'ko'],
  openGraph: {
    title: 'Beshyfy',
    description: 'Transform your sentences with cartwheels',
    type: 'website',
  },
  authors: [{ name: 'Mamer' }],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
