import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

import '../styles/globals.css'

import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'

const sora = Sora({ subsets: ['latin'] })

interface RootLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: 'Mbank',
    description: 'Seu banco amigo',
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`w-full min-h-screen scroll-smooth bg-gray-200 text-base text-gray-900 ${sora.className}`}
            >
                <Menu />

                <main className="size-full0"> {children} </main>

                <Footer />
            </body>
        </html>
    )
}
