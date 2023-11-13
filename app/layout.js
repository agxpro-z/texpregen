import { Inter } from 'next/font/google'
import Footer from './ui/Footer'
import Header from './ui/Header'
import './style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'texpregen - Test Expression Generator',
  description: 'A test case/expression generator for DSA questions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
