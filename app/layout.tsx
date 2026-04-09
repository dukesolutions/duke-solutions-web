import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Duke Solutions - Professional Construction Services',
  description: 'Duke Solutions offers professional residential construction, remodeling, and renovation services in Hamilton, Ontario and surrounding areas.',
  keywords: 'construction, remodeling, home renovation, Hamilton, Ontario',
  openGraph: {
    title: 'Duke Solutions - Professional Construction Services',
    description: 'Expert construction and remodeling services',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}
