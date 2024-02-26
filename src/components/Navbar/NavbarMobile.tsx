import Link from 'next/link'

import { Brand } from '../Brand'

interface NavbarMobileProps {
    isActive?: boolean
    onClick?: () => void
}

export function NavbarMobile({ isActive = false, onClick }: NavbarMobileProps) {
    return (
        <nav className="max-w-[1440px] mx-auto py-3 px-6 flex items-center justify-between lg:hidden">
            <button
                onClick={onClick}
                className={`
                    z-[998] relative cursr-pointer size-9 transition-all
                    before:content-[''] before:absolute before:left-[16%] before:w-[70%] before:h-[0.125rem] before:bg-secondary-500 before:transition-all
                    after:content-[''] after:absolute  after:left-[16%] after:w-[70%] after:h-[0.125rem] after:bg-secondary-500 after:transition-all
                    ${
                        isActive
                            ? 'before:top-1/2 before:rotate-[-135deg] after:top-1/2 after:rotate-[315deg]'
                            : 'before:top-[30%] after:top-[60%]'
                    }
                `}
            ></button>

            <div className="size-12 flex items-center justify-center">
                <Brand.Normal className="size-full" />
            </div>

            <Link href="#"> Login </Link>
        </nav>
    )
}
