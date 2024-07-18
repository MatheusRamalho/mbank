import { ComponentPropsWithoutRef } from 'react'

export function EntailIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={128}
            height={32}
            viewBox="0 0 122 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0)">
                <path
                    d="M60 29.5C33.5 29.5 33.5 0 0 0h122.5C88.5 0 83 29.5 60 29.5z"
                    fill="#EDEAEF"
                />
                <path
                    d="M53 12l6 6 6-6"
                    stroke="url(#paint0_linear)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1={63.14}
                    y1={12.81}
                    x2={60.2415}
                    y2={19.4922}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H122V31H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
