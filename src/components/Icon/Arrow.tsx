import { ComponentPropsWithoutRef } from 'react'

export function ArrowIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M8 16.5h16m0 0L16.5 9m7.5 7.5L16.5 24"
                stroke="url(#paint0_linear_1290_18770)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1290_18770"
                    x1={21.52}
                    y1={11.025}
                    x2={11.8038}
                    y2={22.9712}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
            </defs>
        </svg>
    )
}
