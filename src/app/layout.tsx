import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Key Yu Wan | Desenvolvedor Web',
  description:
    'Apaixonado por tecnologia, venho trabalhando na área de desenvolvimento há mais de 2 anos.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
