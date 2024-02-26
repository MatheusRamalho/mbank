import { ComponentPropsWithoutRef } from 'react'

export function CardIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1150_31)">
                <rect width={72} height={72} rx={17.0769} fill="#FEFBFF" />
                <g strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path
                        d="M49.09 24H22.91A2.909 2.909 0 0020 26.91v17.454a2.909 2.909 0 002.91 2.909h26.18a2.909 2.909 0 002.91-2.91V26.91A2.909 2.909 0 0049.09 24z"
                        stroke="url(#paint0_linear_1150_31)"
                    />
                    <path
                        d="M20 32.727h32"
                        stroke="url(#paint1_linear_1150_31)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1150_31"
                    x1={47.04}
                    y1={27.1418}
                    x2={33.1423}
                    y2={49.1686}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1150_31"
                    x1={47.04}
                    y1={32.8623}
                    x2={47.0042}
                    y2={34.1846}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <clipPath id="clip0_1150_31">
                    <path fill="#fff" d="M0 0H72V72H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
