import { NavbarRootWrapper } from "./Root.styled";
import { NavbarRootProps } from "./Root.types";

export const NavbarRoot = ({ children, isActive = false }: NavbarRootProps) => {
    const handleScrollHeader = () => {
        const header = document.querySelector('#header');

        if (header) {
            (window.scrollY >= 50)
                ? header.classList.add('header--active')
                : header.classList.remove('header--active');
        }
    }
    window.addEventListener('scroll', handleScrollHeader);

    return (
        <NavbarRootWrapper
            id="header"
            className={`header ${isActive ? 'header--active' : ''}`}
        >
            {children}
        </NavbarRootWrapper>
    );
}
