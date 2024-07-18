import { ComponentPropsWithoutRef } from 'react'

export function PhoneIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1436_95)">
                <rect width={72} height={72} rx={17.0769} fill="#FEFBFF" />
                <g strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path
                        d="M22 41.5v-9a13.5 13.5 0 1127 0v9"
                        stroke="url(#paint0_linear_1436_95)"
                    />
                    <path
                        d="M49 43a3 3 0 01-3 3h-1.5a3 3 0 01-3-3v-4.5a3 3 0 013-3H49V43zm-27 0a3 3 0 003 3h1.5a3 3 0 003-3v-4.5a3 3 0 00-3-3H22V43z"
                        stroke="url(#paint1_linear_1436_95)"
                    />
                    <path
                        d="M49 40.5c.587 10.437-3 12-13 12"
                        stroke="url(#paint2_linear_1436_95)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1436_95"
                    x1={44.815}
                    y1={22.0375}
                    x2={30.6789}
                    y2={41.5907}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1436_95"
                    x1={44.815}
                    y1={36.9175}
                    x2={40.6065}
                    y2={49.3917}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_1436_95"
                    x1={47.0366}
                    y1={42.12}
                    x2={39.2971}
                    y2={51.83}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <clipPath id="clip0_1436_95">
                    <path fill="#fff" d="M0 0H72V72H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
