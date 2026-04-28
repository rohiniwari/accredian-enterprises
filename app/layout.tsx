import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Accredian Enterprise | Upskill Your Workforce at Scale',
  description:
    'Partner with IITs, IIMs, and global universities to upskill your enterprise teams with curated programs, live mentorship, and real-time analytics that deliver measurable ROI.',
  keywords: [
    'enterprise learning',
    'workforce upskilling',
    'IIT programs',
    'IIM programs',
    'corporate training',
    'L&D',
  ],
  openGraph: {
    title: 'Accredian Enterprise | Upskill Your Workforce at Scale',
    description: 'The complete operating system for enterprise learning.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accredian Enterprise | Upskill Your Workforce at Scale',
    description: 'The complete operating system for enterprise learning.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://accredian-enterprise.vercel.app'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

