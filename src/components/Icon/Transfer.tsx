import { ComponentPropsWithoutRef } from 'react'

export function TransferIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1436_90)">
                <rect width={72} height={72} rx={17.0769} fill="#FEFBFF" />
                <g
                    strokeWidth={3.00026}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path
                        d="M52.003 24.497v9h-9"
                        stroke="url(#paint0_linear_1436_90)"
                    />
                    <path
                        d="M19 48.499v-9.001h9"
                        stroke="url(#paint1_linear_1436_90)"
                    />
                    <path
                        d="M22.765 31.997a13.5 13.5 0 0122.277-5.04l6.96 6.54m-33.002 6l6.96 6.541a13.502 13.502 0 0022.278-5.04"
                        stroke="url(#paint2_linear_1436_90)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1436_90"
                    x1={50.6079}
                    y1={25.7117}
                    x2={44.7123}
                    y2={32.5073}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1436_90"
                    x1={26.6057}
                    y1={40.7129}
                    x2={20.7101}
                    y2={47.5085}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_1436_90"
                    x1={46.8874}
                    y1={26.6444}
                    x2={30.0284}
                    y2={50.4021}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#C84343" />
                </linearGradient>
                <clipPath id="clip0_1436_90">
                    <path fill="#fff" d="M0 0H72V72H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
