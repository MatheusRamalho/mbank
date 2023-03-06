import { useState } from "react";
import { Link } from "react-router-dom";

import brandSvg from '../../../assets/svgs/brand.svg';
import { NavbarMobileWrapper } from "./Mobile.styled";

export const NavbarMobile = () => {
    const [isActive, setIsActive] = useState(false);

    const handleMenuToggle = () => {
        let menu = document.querySelector('.navbar-mobile-menu');

        if (isActive === true) {
            setIsActive(false);
            (menu) && menu.classList.remove('navbar-mobile-menu--active');
        } else {
            setIsActive(true);
            (menu) && menu.classList.add('navbar-mobile-menu--active');
        }
    }

    return (
        <NavbarMobileWrapper className="navbar-mobile">
            <div
                onClick={handleMenuToggle}
                className={`nav-hamburguer ${isActive ? 'nav-hamburguer--active' : ''}`}
            ></div>

            <div className="nav-brand">
                <img
                    src={brandSvg}
                    alt=""
                    title="Nubank"
                />
            </div>

            <Link to="#"> Login </Link>
        </NavbarMobileWrapper>
    );
}
