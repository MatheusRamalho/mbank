import { ComponentPropsWithoutRef } from 'react'

export function TwitterIcon(props: ComponentPropsWithoutRef<'svg'>) {
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
                d="M40 11.015a15.855 15.855 0 01-4.567 2.225A6.516 6.516 0 0024 17.604v1.454a15.507 15.507 0 01-13.09-6.589S5.09 25.56 18.181 31.38A16.932 16.932 0 018 34.286c13.09 7.273 29.09 0 29.09-16.727a6.54 6.54 0 00-.116-1.207A11.228 11.228 0 0040 11.015v0z"
                stroke="#868587"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
