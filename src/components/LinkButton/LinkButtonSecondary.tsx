import Link from 'next/link'

import { LinkButtonProps } from './LinkButton.types'

export function LinkButtonSecondary({
    name,
    link,
    children,
    customClass,
}: LinkButtonProps) {
    return (
        <Link
            className={`
                cursor-pointer w-fit py-3 px-8 border border-transparent rounded-lg bg-gray-100 text-gray-950 no-underline transition-all flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 hover:border-gray-300 hover:shadow-xl
                ${customClass}
            `}
            href={link || '#'}
        >
            {name || ''}
            {children}
        </Link>
    )
}
