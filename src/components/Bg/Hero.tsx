import { ComponentPropsWithoutRef } from 'react'

export function BgHero(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1076_0)">
                <path fill="#EDEAEF" d="M0 0H1920V1080H0z" />
                <g
                    style={{ transform: 'translate3d(0, -150px, 0)' }}
                    filter="url(#filter0_f_1076_0)"
                >
                    <rect
                        width={535.102}
                        height={1363.6}
                        rx={55}
                        transform="matrix(.86603 .5 -.86603 .5 1796.91 0)"
                        fill="url(#paint0_linear_1076_0)"
                        fillOpacity={0.3}
                    />
                </g>
                <g
                    style={{ transform: 'translate3d(0, -100px, 0)' }}
                    filter="url(#filter1_f_1076_0)"
                >
                    <rect
                        width={535.102}
                        height={1363.6}
                        rx={55}
                        transform="matrix(.86603 .5 -.86603 .5 690.911 -50)"
                        fill="url(#paint1_linear_1076_0)"
                        fillOpacity={0.3}
                    />
                </g>
                <g className="animate-bg-move3" filter="url(#filter2_b_1076_0)">
                    <rect
                        width={535.102}
                        height={843.545}
                        rx={55}
                        transform="matrix(.86603 .5 -.86603 .5 1571.53 -176)"
                        fill="url(#paint2_linear_1076_0)"
                    />
                </g>
                <g className="animate-bg-move2" filter="url(#filter3_b_1076_0)">
                    <rect
                        width={535.102}
                        height={843.545}
                        rx={55}
                        transform="matrix(.86603 .5 -.86603 .5 788.531 309)"
                        fill="url(#paint3_linear_1076_0)"
                    />
                </g>
                <g className="animate-bg-move5" filter="url(#filter4_b_1076_0)">
                    <rect
                        width={535.102}
                        height={843.545}
                        rx={55}
                        transform="matrix(.86603 .5 -.86603 .5 1844.53 336)"
                        fill="url(#paint4_linear_1076_0)"
                    />
                </g>
                <g className="animate-bg-move3" filter="url(#filter5_b_1076_0)">
                    <rect
                        width={535.102}
                        height={843.545}
                        rx={55}
                        transform="matrix(.86603 .5 -.86603 .5 642.531 -237)"
                        fill="url(#paint5_linear_1076_0)"
                    />
                </g>
                <path
                    className="bg-hero-letter-u"
                    d="M1985 699.703V258.116c0-21.5-11.64-28.116-28.28-28.116h-93.15c-19.96 0-28.28 6.616-28.28 28.116v618.556c0 14.885-29.73 68.958-113.11 62.849C1564.15 927.944 1471 818.703 1471 731.129V258.116c0-18.193 8.32-28.116 28.28-28.116h91.49c19.96 0 28.28 9.923 28.28 28.116v436.628c0 49.482 49.21 102.541 103.13 102.541h166.35c53.23 0 96.47-61.196 96.47-97.582z"
                    stroke="url(#paint6_linear_1076_0)"
                    strokeWidth={2}
                />
                <path
                    className="bg-hero-letter-n"
                    d="M841 326.297v441.587c0 21.5 11.598 28.116 28.168 28.116h92.79c19.883 0 28.168-6.616 28.168-28.116V149.328c0-14.885 29.614-68.958 112.674-62.85C1260.21 98.057 1353 207.298 1353 294.872v473.013c0 18.193-8.29 28.116-28.17 28.116h-91.13c-19.88 0-28.17-9.923-28.17-28.116V331.256c0-49.482-49.02-102.541-102.73-102.541H937.093c-53.023 0-96.093 61.196-96.093 97.582z"
                    stroke="url(#paint7_linear_1076_0)"
                    strokeWidth={2}
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_1076_0"
                    x={393.902}
                    y={-233.891}
                    width={2088.52}
                    height={1417.13}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation={125}
                        result="effect1_foregroundBlur_1076_0"
                    />
                </filter>
                <filter
                    id="filter1_f_1076_0"
                    x={-712.098}
                    y={-283.891}
                    width={2088.52}
                    height={1417.13}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation={125}
                        result="effect1_foregroundBlur_1076_0"
                    />
                </filter>
                <filter
                    id="filter2_b_1076_0"
                    x={850.902}
                    y={-177.891}
                    width={1174.14}
                    height={693.105}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation={9} />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1076_0"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1076_0"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter3_b_1076_0"
                    x={67.9016}
                    y={307.109}
                    width={1174.14}
                    height={693.105}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation={9} />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1076_0"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1076_0"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter4_b_1076_0"
                    x={1123.9}
                    y={334.109}
                    width={1174.14}
                    height={693.105}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation={9} />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1076_0"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1076_0"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter5_b_1076_0"
                    x={-78.0984}
                    y={-238.891}
                    width={1174.14}
                    height={693.105}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation={9} />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1076_0"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1076_0"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_1076_0"
                    x1={535.102}
                    y1={0}
                    x2={-392.29}
                    y2={363.927}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#8429A0" />
                    <stop offset={1} stopColor="#8429A0" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1076_0"
                    x1={535.102}
                    y1={0}
                    x2={-392.29}
                    y2={363.927}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#8429A0" />
                    <stop offset={1} stopColor="#8429A0" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_1076_0"
                    x1={267.551}
                    y1={0}
                    x2={267.551}
                    y2={843.545}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F6F3F7" />
                    <stop offset={1} stopColor="#F3F0F5" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_1076_0"
                    x1={267.551}
                    y1={0}
                    x2={267.551}
                    y2={843.545}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F6F3F7" />
                    <stop offset={1} stopColor="#F3F0F5" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_1076_0"
                    x1={267.551}
                    y1={0}
                    x2={267.551}
                    y2={843.545}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F6F3F7" />
                    <stop offset={1} stopColor="#F3F0F5" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_1076_0"
                    x1={267.551}
                    y1={0}
                    x2={267.551}
                    y2={843.545}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F6F3F7" />
                    <stop offset={1} stopColor="#F3F0F5" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_1076_0"
                    x1={1728}
                    y1={230}
                    x2={1728}
                    y2={940}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#82269E" stopOpacity={0.7} />
                    <stop offset={1} stopColor="#82269E" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint7_linear_1076_0"
                    x1={1097}
                    y1={796}
                    x2={1097}
                    y2={86}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#82269E" stopOpacity={0.7} />
                    <stop offset={1} stopColor="#82269E" stopOpacity={0} />
                </linearGradient>
                <clipPath id="clip0_1076_0">
                    <path fill="#fff" d="M0 0H1920V1080H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
