import { ComponentPropsWithoutRef } from 'react'

export function ConfigIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1170_15)">
                <rect width={72} height={72} rx={17.0769} fill="#FEFBFF" />
                <g strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path
                        d="M36 41.364a4.364 4.364 0 100-8.727 4.364 4.364 0 000 8.727z"
                        stroke="url(#paint0_linear_1170_15)"
                    />
                    <path
                        d="M46.764 41.364a2.4 2.4 0 00.48 2.647l.087.087a2.909 2.909 0 01-.944 4.748 2.909 2.909 0 01-3.172-.631l-.088-.088a2.4 2.4 0 00-2.647-.48 2.4 2.4 0 00-1.454 2.197v.247a2.909 2.909 0 11-5.819 0v-.131a2.4 2.4 0 00-1.57-2.196 2.4 2.4 0 00-2.648.48l-.087.087a2.909 2.909 0 01-4.748-.944 2.909 2.909 0 01.631-3.172l.088-.088a2.4 2.4 0 00.48-2.647 2.4 2.4 0 00-2.197-1.454h-.247a2.909 2.909 0 110-5.819h.131a2.4 2.4 0 002.196-1.57 2.4 2.4 0 00-.48-2.648l-.087-.087a2.909 2.909 0 01.944-4.748 2.909 2.909 0 013.172.631l.088.088a2.4 2.4 0 002.647.48h.116a2.4 2.4 0 001.455-2.197v-.247a2.909 2.909 0 115.818 0v.131a2.4 2.4 0 001.455 2.196 2.4 2.4 0 002.647-.48l.087-.087a2.909 2.909 0 014.748.944 2.909 2.909 0 01-.631 3.172l-.088.088a2.4 2.4 0 00-.48 2.647v.116a2.4 2.4 0 002.197 1.455h.247a2.909 2.909 0 110 5.818h-.131a2.4 2.4 0 00-2.196 1.455v0z"
                        stroke="url(#paint1_linear_1170_15)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1170_15"
                    x1={39.0108}
                    y1={33.8147}
                    x2={33.2944}
                    y2={40.4037}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1170_15"
                    x1={47.04}
                    y1={25.32}
                    x2={26.08}
                    y2={49.48}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <clipPath id="clip0_1170_15">
                    <path fill="#fff" d="M0 0H72V72H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
