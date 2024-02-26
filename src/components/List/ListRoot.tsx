import { ReactNode } from 'react'

interface ListRootProps {
    children: ReactNode
    customClass?: string
    isHorizontal?: boolean
}

export function ListRoot({
    customClass,
    children,
    isHorizontal = false,
}: ListRootProps) {
    return (
        <ul
            className={`flex items-center ${customClass} ${
                isHorizontal
                    ? 'justify-center flex-row'
                    : 'justify-start flex-col'
            }`}
        >
            {children}
        </ul>
    )
}
