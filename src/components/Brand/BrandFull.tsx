import { ComponentPropsWithoutRef } from 'react'

export function BrandFull(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            viewBox="0 0 95 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                width={95}
                height={89}
                rx={15}
                fill="url(#paint0_linear_27_11)"
            />
            <path
                d="M74.999 37.899v0m0 0l-.146 22.667c-.007 1.104-.599 1.44-1.44 1.434l-4.711-.031c-1.01-.007-1.428-.349-1.42-1.453l.167-25.977m7.55 3.36c.012-1.867 0-3.36-5.63-3.36h-1.92m0 0l.037-5.774c.005-.765-2.926-.286-7.146 0-7.994.541-11.296 2.854-11.325 7.349l-.157 24.28c-.006.934.412 1.446 1.42 1.453l4.628.03c1.01.007 1.433-.5 1.439-1.434l.144-22.412c.017-2.539 2.766-3.51 5.493-3.492h5.467zm-46.448 3.008h0m0 0l.146 22.667c.007 1.104.599 1.44 1.44 1.434l4.711-.032c1.01-.006 1.428-.348 1.42-1.452l-.167-25.978m-7.55 3.361c-.012-1.867 0-3.36 5.63-3.36h1.92m0 0l-.037-5.775c-.005-.764 2.926-.285 7.146 0 7.994.542 11.296 2.854 11.325 7.35l.157 24.28c.006.933-.412 1.446-1.42 1.453l-4.628.03c-1.01.007-1.433-.5-1.439-1.434l-.144-22.412c-.017-2.54-2.766-3.51-5.493-3.493H28.55z"
                stroke="#EDEAEF"
                strokeWidth={2.45216}
            />
            <defs>
                <linearGradient
                    id="paint0_linear_27_11"
                    x1={0}
                    y1={44.5}
                    x2={95}
                    y2={44.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={0.5} stopColor="#C84343" />
                    <stop offset={1} stopColor="#BC2C38" />
                </linearGradient>
            </defs>
        </svg>
    )
}
