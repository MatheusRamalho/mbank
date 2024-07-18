import { ComponentPropsWithoutRef } from 'react'

export function AppStoreFullIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={84}
            height={27}
            viewBox="0 0 84 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <text
                fill="#232224"
                xmlSpace="preserve"
                style={{
                    whiteSpace: 'pre',
                }}
                fontFamily="Source Sans Pro"
                fontSize={10}
                letterSpacing="0em"
            >
                <tspan x={27} y={10.055}>
                    {'Download via'}
                </tspan>
            </text>
            <text
                fill="#232224"
                xmlSpace="preserve"
                style={{
                    whiteSpace: 'pre',
                }}
                fontFamily="Source Sans Pro"
                fontSize={13}
                fontWeight="bold"
                letterSpacing="0em"
            >
                <tspan x={27} y={23.6215}>
                    {'App Store'}
                </tspan>
            </text>
            <path
                d="M.01 14.872c-.171-3.014 1.939-6.09 5.041-6.09.714 0 1.038.168 1.817.415.416.132 1.122.499 1.53.499.409 0 .898-.27 1.56-.517.937-.35 1.491-.388 2.033-.398 1.816 0 3.15.774 4 1.975-1.403.93-2.143 2.058-2.184 3.888 0 1.663 1.041 3.284 2.715 4.012-.409 1.746-2.613 5.342-4.43 5.342-.623-.036-1.006-.135-1.734-.416-.543-.242-1.266-.415-1.735-.415-.49-.021-1.039.14-1.725.415-.581.234-.928.366-1.724.416-1.51.096-4.862-3.783-5.164-9.126z"
                fill="url(#paint0_linear_8486_24083)"
            />
            <path
                d="M9.378 5.538c-.842.924-1.163 2.142-1.102 3.243 1.388-.104 2.347-.686 3.225-1.767.877-1.08.884-1.866.877-3.014-1.021.17-2.204.665-3 1.538z"
                fill="url(#paint1_linear_8486_24083)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_8486_24083"
                    x1={13.9609}
                    y1={6.7}
                    x2={0.744272}
                    y2={19.2849}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_8486_24083"
                    x1={13.9609}
                    y1={6.7}
                    x2={0.744272}
                    y2={19.2849}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
            </defs>
        </svg>
    )
}
