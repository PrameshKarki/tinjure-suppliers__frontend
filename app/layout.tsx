import Footer from '@components/footer'
import Navbar from '@components/navbar'
import Cookie from '@components/utils/Cookie'
import '@styles/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tinjure supplier - Style Unleashed: Unveil Your Fashion Identity',
  description:
    'Explore a wide range of stylish outfits, accessories, and footwear for men, women, and children. Find your perfect fit, express your unique personality, and stay on top of the fashion game with our carefully curated selection. Shop now and embrace the world of fashion at its finest!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Cookie />
        <Footer />
      </body>
    </html>
  )
}
