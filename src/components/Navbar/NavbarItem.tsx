import { ReactNode } from 'react'

interface NavbarItemProps {
    name?: string
    children?: ReactNode
}

export function NavbarItem({ name, children }: NavbarItemProps) {
    return (
        <li className="nav-item relative ml-4">
            <span className="nav-item-link relative inline-block py-3 px-4 after:content-[''] after:absolute after:top-[42%] after:-right-1 after:size-2 after:border-r after:border-b after:border-secondary-500 after:runded-[0.063rem] after:rotate-45 after:transition-all hover:after:top-[45%]">
                {name}
            </span>

            {children}
        </li>
    )
}
