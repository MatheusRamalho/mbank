import Link from 'next/link'

interface DropdownItemProps {
    name: string
    link?: string
}

export function DropdownItem({ name, link }: DropdownItemProps) {
    return (
        <li className="w-full dropdown-item">
            <Link
                className="relative inline-block w-full py-2 px-4 after:content-[''] after:absolute after:top-[90%] after:left-0 after:transition-all after:w-0 after:h-[0.125rem] after:bg-gray-500 hover:after:w-full"
                href={link || '#'}
            >
                {name}
            </Link>
        </li>
    )
}
