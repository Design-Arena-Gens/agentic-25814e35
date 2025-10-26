import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Dreamweaver\'s Journey - Animated Story',
  description: 'A 15-minute animated story with 20 scenes',
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
