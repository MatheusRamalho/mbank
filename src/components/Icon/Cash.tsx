import { ComponentPropsWithoutRef } from 'react'

export function CashIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1436_85)">
                <rect width={72} height={72} rx={17.0769} fill="#FEFBFF" />
                <g strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M36 19v33" stroke="url(#paint0_linear_1436_85)" />
                    <path
                        d="M43.5 25H32.25a5.25 5.25 0 100 10.5h7.5a5.25 5.25 0 110 10.5H27"
                        stroke="url(#paint1_linear_1436_85)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1436_85"
                    x1={36.845}
                    y1={23.455}
                    x2={35.3216}
                    y2={23.5082}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1436_85"
                    x1={42.21}
                    y1={27.835}
                    x2={28.3169}
                    y2={41.5614}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <clipPath id="clip0_1436_85">
                    <path fill="#fff" d="M0 0H72V72H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
