import { ComponentPropsWithoutRef } from 'react'

export function CheckIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1222_18745)">
                <circle cx={20} cy={20} r={20} fill="#FEFBFF" />
                <path
                    d="M28.421 14.737L16.842 26.316l-5.263-5.263"
                    stroke="url(#paint0_linear_1222_18745)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1222_18745"
                    x1={25.8104}
                    y1={16.3}
                    x2={19.0698}
                    y2={27.6014}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <clipPath id="clip0_1222_18745">
                    <path fill="#fff" d="M0 0H40V40H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
