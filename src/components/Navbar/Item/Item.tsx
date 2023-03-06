import { NavbarItemWrapper } from "./Item.styled";
import { NavbarItemProps } from "./Item.types";

export const NavbarItem = ({ name, children }: NavbarItemProps) => {
    const handleDropdownToggle = (event: any) => {
        event.preventDefault();

        let link = event.currentTarget;
        let item = link ? link.closest('li.nav-item') : null;
        let dropdown = item ? item.querySelector('ul.dropdown-menu') : null;
        let dropdowns = document.querySelectorAll('ul.dropdown-menu');

        dropdowns.forEach(element => {
            (dropdown) &&
                (element === dropdown)
                ? dropdown.classList.toggle('dropdown-menu--active')
                : element.classList.remove('dropdown-menu--active');
        });
    }

    return (
        <NavbarItemWrapper className="nav-item">
            <a
                className="nav-item-link"
                href="#"
                onClick={(event) => handleDropdownToggle(event)}
            >
                {name}
            </a>

            {children}
        </NavbarItemWrapper>
    );
}
