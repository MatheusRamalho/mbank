import { ReactNode } from 'react'
import Link from 'next/link'

interface NavItemMobileProps {
    name?: string
    link?: string
    children?: ReactNode
    isVariation?: boolean
    customClass?: string
}

export function NavbarItemMobile({
    name,
    link,
    isVariation = false,
    children,
    customClass,
}: NavItemMobileProps) {
    return (
        <li className={customClass}>
            {isVariation ? (
                <> {children} </>
            ) : (
                <Link
                    className="relative inline-block py-4 px-6 text-gray-500 after:content-[''] after:absolute after:top-[90%] after:left-4 after:transition-all after:w-0 after:h-[0.125rem] after:bg-secondary-500 hover:text-secondary-500 hover:after:w-full text-2xl lg:text-4xl"
                    href={link || '#'}
                >
                    {name}
                </Link>
            )}
        </li>
    )
}
