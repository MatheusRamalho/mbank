import Link from 'next/link'

import { LinkButtonProps } from './LinkButton.types'

export function LinkButtonPrimary({
    name,
    link,
    children,
    customClass,
}: LinkButtonProps) {
    return (
        <Link
            className={`
                cursor-pointer w-fit py-3 px-8 border-none rounded-lg bg-primary-gradient shadow-purple1 text-gray-50 no-underline transition-all flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 hover:font-bold
                ${customClass}
            `}
            href={link || '#'}
        >
            {name || ''}
            {children}
        </Link>
    )
}
