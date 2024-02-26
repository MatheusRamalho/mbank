import { ReactNode } from 'react'

interface ListItemProps {
    title?: string
    description?: string
    children?: ReactNode
}

export function ListItem({ children, title, description }: ListItemProps) {
    return (
        <li className="w-full mb-8 p-2 flex items-start justify-start gap-4 flex-col sm:flex-row sm:items-center">
            <div className=""> {children} </div>

            <div className="">
                {title && <strong className="block"> {title} </strong>}
                {description && <p> {description} </p>}
            </div>
        </li>
    )
}
