import { NavbarMobileMenuWrapper } from "./MobileMenu.styled";
import { NavbarMobileMenuProps } from "./MobileMenu.types";

export const NavbarMobileMenu = ({ children }: NavbarMobileMenuProps) => {
    return (
        <NavbarMobileMenuWrapper className="navbar-mobile-menu">
            <ul className="navbar-mobile-menu__list">
                {children}
            </ul>
        </NavbarMobileMenuWrapper>
    );
}
