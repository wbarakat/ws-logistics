import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WS Logistics | UCO Brokerage Services in the DMV',
  description: 'WS Logistics connects restaurants with used cooking oil (UCO) recyclers across DC, Maryland, and Virginia. Reliable pickups, competitive rates, and professional service.',
  keywords: ['UCO', 'used cooking oil', 'recycling', 'DMV', 'Maryland', 'Virginia', 'DC', 'grease pickup', 'restaurant services'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
