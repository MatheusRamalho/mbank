import Link from 'next/link'

import { LinkButtonProps } from './LinkButton.types'

export function LinkButtonTertiary({
    name,
    link,
    children,
    customClass,
}: LinkButtonProps) {
    return (
        <Link
            className={`
                cursor-pointer w-fit p-0 border-none rounded-lg bg-transparent text-gray-950 no-underline transition-all flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 hover:enabled:scale-105 hover:enabled:shadow-purple2 hover:enabled:opacity-90 hover:enabled:text-secondary-500
                ${customClass}
            `}
            href={link || '#'}
        >
            {name || ''}
            {children}
        </Link>
    )
}
