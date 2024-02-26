import { ComponentPropsWithoutRef } from 'react'

export function TimeIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1170_8)">
                <rect width={72} height={72} rx={17.0769} fill="#FEFBFF" />
                <g strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path
                        d="M36 52c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z"
                        stroke="url(#paint0_linear_1170_8)"
                    />
                    <path
                        d="M36 26.4V36l6.4 3.2"
                        stroke="url(#paint1_linear_1170_8)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1170_8"
                    x1={47.04}
                    y1={24.32}
                    x2={26.08}
                    y2={48.48}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1170_8"
                    x1={41.408}
                    y1={28.1279}
                    x2={34.0803}
                    y2={32.3511}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <clipPath id="clip0_1170_8">
                    <path fill="#fff" d="M0 0H72V72H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
