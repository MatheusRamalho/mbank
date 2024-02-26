import { ComponentPropsWithoutRef } from 'react'

export function InstagramIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M32 8H16a8 8 0 00-8 8v16a8 8 0 008 8h16a8 8 0 008-8V16a8 8 0 00-8-8z"
                stroke="#868587"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M30.4 22.992a6.4 6.4 0 11-12.662 1.877A6.4 6.4 0 0130.4 22.992zM32.8 15.199h.017"
                stroke="#868587"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
