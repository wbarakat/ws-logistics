import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WS Logistics | Account Brokerage & Business Development',
  description: 'WS Logistics connects suppliers with buyers across industries. Expert account brokerage, deal negotiation, and business development services.',
  keywords: ['account brokerage', 'business development', 'B2B', 'supplier connections', 'deal negotiation'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
