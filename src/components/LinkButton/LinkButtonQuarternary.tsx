import Link from 'next/link'

import { LinkButtonProps } from './LinkButton.types'

export function LinkButtonQuaternary({
    name,
    link,
    children,
    customClass,
}: LinkButtonProps) {
    return (
        <Link
            className={`
                relative cursor-pointer w-fit pb-4 border-none rounded-lg bg-arrow bg-no-repeat bg-[0%_50%] text-lg text-secondary-500 no-underline transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50
                after:content-[""] after:absolute after:top-3/4 after:left-0 after:block after:w-0 after:h-[0.125rem] after:rounded-sm after:bg-secondary-300 after:transition-all
                hover:enabled:scale-105 hover:enabled:shadow-purple2 hover:enabled:opacity-80 hover:enabled:pl-16 hover:enabled:bg-[8px_50%] hover:after:w-4/5
                ${customClass}
            `}
            href={link || '#'}
        >
            {name || ''}
            {children}
        </Link>
    )
}
