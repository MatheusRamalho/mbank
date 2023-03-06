import { Link } from "react-router-dom";

import { NavbarItemMobileWrapper } from "./ItemMobile.styled";
import { NavItemMobileProps } from "./ItemMobile.types";

export const NavbarItemMobile = ({ name, link, isVariation = false, children, classe }: NavItemMobileProps) => {
    return (
        <NavbarItemMobileWrapper className={`nav-item-mobile ${classe}`}>
            {isVariation
                ? <> {children} </>
                : <Link
                    className="nav-item-mobile-link"
                    to={link ? link : '#'}
                >
                    {name}
                </Link>
            }
        </NavbarItemMobileWrapper>
    );
}
