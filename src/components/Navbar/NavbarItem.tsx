import { MouseEvent, ReactNode } from 'react'

interface NavbarItemProps {
    name?: string
    children?: ReactNode
}

export function NavbarItem({ name, children }: NavbarItemProps) {
    function handleDropdownToggle(event: MouseEvent<HTMLSpanElement>) {
        event.preventDefault()

        const link = event.currentTarget
        const item = link ? link.closest('li.nav-item') : null
        const dropdown = item ? item.querySelector('ul.dropdown-menu') : null
        const dropdowns = document.querySelectorAll('ul.dropdown-menu')

        dropdowns.forEach((element) => {
            dropdown && element === dropdown
                ? dropdown.classList.toggle('dropdown-menu--active')
                : element.classList.remove('dropdown-menu--active')
        })
    }

    return (
        <li className="nav-item relative ml-4">
            <span
                className="nav-item-link relative inline-block py-3 px-4 after:content-[''] after:absolute after:top-[42%] after:-right-1 after:size-2 after:border-r after:border-b after:border-secondary-500 after:runded-[0.063rem] after:rotate-45 after:transition-all hover:after:top-[45%]"
                // onClick={(event) => handleDropdownToggle(event)}
            >
                {name}
            </span>

            {children}
        </li>
    )
}
