// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Rethink_Sans } from 'next/font/google'
import './styles.css'

const rethink_sans = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rethink_sans',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={rethink_sans.variable} >
        {children}
      </body>
    </html>
  )
}