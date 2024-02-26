'use client'

import { ReactNode, useState } from 'react'

interface DropdownRootProps {
    children: ReactNode
}

export function DropdownRoot({ children }: DropdownRootProps) {
    const [open, setOpen] = useState<boolean>(false)

    function handleDropdownClosed() {
        setOpen(false)
        // const item = event.currentTarget
        // item.classList.remove('opacit-100 pointer-events-auto')
    }

    return (
        <ul
            className={`dropdown-menu absolute top-12 left-6 flex justify-start flex-col items-center p-4 rounded-2xl shadow-purple3 opacity-0 pointer-events-none transition-all bg-gray-100 ${
                open && 'opacit-100 pointer-events-auto'
            }`}
            onMouseLeave={handleDropdownClosed}
            // onMouseLeave={(event: MouseEvent) => handleDropdownClosed(event)}
        >
            {children}
        </ul>
    )
}
