import { ComponentPropsWithoutRef } from 'react'

export function PlayStoreIcon(props: ComponentPropsWithoutRef<'svg'>) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.143 8c-.091.19-.143.405-.143.638v29.704c0 .331.105.626.277.863L25.813 23.67 10.143 8zM27.44 25.297L14.458 38.279 30.743 28.6l-3.303-3.303zm5.344 2.09l-3.717-3.717 3.943-3.943 4.203 2.498c.96.57.96 1.96 0 2.53l-4.429 2.632zm-5.344-5.345L13.572 8.175l17.396 10.339-3.528 3.529z"
                fill="url(#paint0_linear_1125_443)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1125_443"
                    x1={33.6028}
                    y1={12.2127}
                    x2={12.967}
                    y2={33.5044}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A950C4" />
                    <stop offset={1} stopColor="#82269E" />
                </linearGradient>
            </defs>
        </svg>
    )
}
