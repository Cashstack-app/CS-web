import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Cashstack - AI-Powered Banking with StackAI',
  description: 'Send money with just text or snap a photo of any account number. Experience seamless transactions and earn StackPoints on every payment with Cashstack.',
  keywords: ['fintech', 'AI banking', 'StackAI', 'StackPoints', 'photo payments', 'text payments', 'seamless transactions', 'cashstack', 'AI fintech'],
  authors: [{ name: 'Cashstack' }],
  creator: 'Cashstack',
  publisher: 'Cashstack',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cashstack.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cashstack - AI-Powered Banking with StackAI',
    description: 'Send money with just text or snap a photo of any account number. Experience seamless transactions and earn StackPoints on every payment.',
    url: 'https://cashstack.app',
    siteName: 'Cashstack',
    images: [
      {
        url: '/image/hero2.png',
        width: 1200,
        height: 630,
        alt: 'Cashstack - Financial Freedom',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cashstack - AI-Powered Banking with StackAI',
    description: 'Send money with just text or snap a photo of any account number. Experience seamless transactions and earn StackPoints on every payment.',
    images: ['/image/hero2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
