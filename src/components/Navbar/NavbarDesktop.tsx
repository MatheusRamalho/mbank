import { ReactNode } from 'react'
import Link from 'next/link'

import { LinkButton } from '../LinkButton'
import { Brand } from '../Brand'

interface NavbarDesktopProps {
    children?: ReactNode
}

export function NavbarDesktop({ children }: NavbarDesktopProps) {
    return (
        <nav className="max-w-[1440px] mx-auto py-3 px-6 justify-between items-center hidden lg:flex">
            <div className="flex-1 flex items-center justify-start">
                <div className="size-12 flex items-center justify-start">
                    <Brand.Normal />
                </div>

                <ul className="flex items-center justify-start">
                    {' '}
                    {children}{' '}
                </ul>
            </div>

            <div className="flex-1 flex items-center justify-end">
                <LinkButton.Primary link="#" name="Quero ser Nubank" />

                <Link className="ml-4" href="#">
                    {' '}
                    Login{' '}
                </Link>
            </div>
        </nav>
    )
}
