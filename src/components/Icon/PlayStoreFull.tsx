import { ComponentPropsWithoutRef } from 'react'

export function PlayStoreFullIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={99}
            height={27}
            viewBox="0 0 99 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.41 4.208A1.45 1.45 0 000 5.23v17.129c0 .471.212.869.53 1.131l9.58-9.58-9.7-9.7zM11.151 14.95l-8.3 8.301 10.412-6.189-2.112-2.112zm3.418 1.336l-2.377-2.376 2.52-2.522 1.921 1.142c.96.57.96 1.96 0 2.53l-2.064 1.226zm-3.418-3.417L2.283 4l11.125 6.612-2.257 2.256z"
                fill="url(#paint0_linear_8486_24082)"
            />
            <text
                fill="#232224"
                xmlSpace="preserve"
                style={{
                    whiteSpace: 'pre',
                }}
                fontFamily="Source Sans Pro"
                fontSize={9}
                letterSpacing="0em"
            >
                <tspan x={30} y={8.6995}>
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
                <tspan x={31} y={23.6215}>
                    {'Google Play'}
                </tspan>
            </text>
            <defs>
                <linearGradient
                    id="paint0_linear_8486_24082"
                    x1={14.6631}
                    y1={6.63106}
                    x2={1.77291}
                    y2={19.8604}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
            </defs>
        </svg>
    )
}
