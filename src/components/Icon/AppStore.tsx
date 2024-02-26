import { ComponentPropsWithoutRef } from 'react'

export function AppStoreIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M8.019 25.114c-.331-5.577 3.755-11.269 9.764-11.269 1.384 0 2.011.313 3.518.77.807.244 2.175.923 2.965.923s1.74-.5 3.02-.957c1.815-.648 2.889-.717 3.938-.736 3.518 0 6.101 1.431 7.748 3.654-2.718 1.72-4.15 3.807-4.23 7.192 0 3.076 2.016 6.076 5.258 7.422-.79 3.23-5.06 9.884-8.578 9.884-1.209-.067-1.951-.25-3.36-.77-1.051-.447-2.452-.768-3.36-.768-.95-.039-2.013.26-3.341.769-1.127.43-1.798.676-3.34.769-2.926.176-9.416-7-10.002-16.883z"
                fill="url(#paint0_linear_1125_441)"
            />
            <path
                d="M26.164 7.846c-1.632 1.71-2.254 3.961-2.135 6 2.688-.193 4.546-1.27 6.246-3.27 1.7-2 1.713-3.453 1.7-5.576-1.979.313-4.27 1.23-5.811 2.846z"
                fill="url(#paint1_linear_1125_441)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1125_441"
                    x1={35.04}
                    y1={9.995}
                    x2={10.5601}
                    y2={34.3992}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1125_441"
                    x1={35.04}
                    y1={9.995}
                    x2={10.5601}
                    y2={34.3992}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
            </defs>
        </svg>
    )
}
