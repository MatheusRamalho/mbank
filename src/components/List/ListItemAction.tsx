import { ReactNode } from 'react'
import Link from 'next/link'

interface ListItemActionProps {
    name?: string
    link?: string
    children?: ReactNode
    customClass?: string
}

export function ListItemAction({
    name,
    link,
    children,
    customClass,
}: ListItemActionProps) {
    return (
        <li className="w-full mb-3 transition-all flex items-center justify-start group">
            <Link
                className={`text-gray-200 transition-all group-hover:font-semibold group-hover:text-gray-100 ${customClass}`}
                href={link || '#'}
            >
                {children ? (
                    <>
                        {children} {name}
                    </>
                ) : (
                    <> {name} </>
                )}
            </Link>
        </li>
    )
}
