'use client'

import { ReactNode, useEffect, useState } from 'react'

interface NavbarRootProps {
    isActive?: boolean
    children?: ReactNode
}

export function NavbarRoot({ children, isActive = false }: NavbarRootProps) {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        function handleScrollHeader() {
            const header = document.querySelector('#header')

            if (header) {
                window.scrollY >= 50 ? setScroll(true) : setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScrollHeader)
    }, [])

    return (
        <header
            id="header"
            className={`header fixed z-[999] w-full h-[4.5rem]
                ${
                    isActive || scroll
                        ? 'bg-gray-200 shadow-purple3'
                        : 'bg-transparent shadow-none'
                }
            `}
        >
            {children}
        </header>
    )
}
