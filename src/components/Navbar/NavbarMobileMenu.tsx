import { ReactNode } from 'react'

interface NavbarMobileMenuProps {
    isOpen?: boolean
    children?: ReactNode
}

export function NavbarMobileMenu({
    isOpen = false,
    children,
}: NavbarMobileMenuProps) {
    return (
        <nav
            className={`w-full h-screen bg-gray-50 transition-all flex items-center justify-center
            ${
                isOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
            }`}
        >
            <ul className="max-w-[1440px] flex flex-col"> {children} </ul>
        </nav>
    )
}
