import { ComponentPropsWithoutRef } from 'react'

export function ContactlessIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1152_16)">
                <rect width={72} height={72} rx={17.0769} fill="#FEFBFF" />
                <g strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path
                        d="M32.467 25.498a16.893 16.893 0 010 21.622"
                        stroke="url(#paint0_linear_1152_16)"
                    />
                    <path
                        d="M37.919 20a24.571 24.571 0 010 32.495"
                        stroke="url(#paint1_linear_1152_16)"
                    />
                    <path
                        d="M27 30.919a9.215 9.215 0 010 10.673"
                        stroke="url(#paint2_linear_1152_16)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1152_16"
                    x1={35.8517}
                    y1={43.769}
                    x2={30.7986}
                    y2={42.9757}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1152_16"
                    x1={43.2289}
                    y1={47.4586}
                    x2={35.3183}
                    y2={46.1622}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_1152_16"
                    x1={28.473}
                    y1={39.9377}
                    x2={26.2623}
                    y2={39.6318}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <clipPath id="clip0_1152_16">
                    <path fill="#fff" d="M0 0H72V72H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
