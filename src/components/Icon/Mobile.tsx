import { ComponentPropsWithoutRef } from 'react'

export function MobileIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1152_0)">
                <rect width={72} height={72} rx={17.0769} fill="#FEFBFF" />
                <g strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path
                        d="M43.6 21H28.1a3.1 3.1 0 00-3.1 3.1v24.8a3.1 3.1 0 003.1 3.1h15.5a3.1 3.1 0 003.1-3.1V24.1a3.1 3.1 0 00-3.1-3.1z"
                        stroke="url(#paint0_linear_1152_0)"
                    />
                    <path
                        d="M35.85 45.8h.016"
                        stroke="url(#paint1_linear_1152_0)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1152_0"
                    x1={43.3365}
                    y1={25.185}
                    x2={23.2896}
                    y2={41.3603}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1152_0"
                    x1={35.8638}
                    y1={45.935}
                    x2={35.8391}
                    y2={45.9355}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <clipPath id="clip0_1152_0">
                    <path fill="#fff" d="M0 0H72V72H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
