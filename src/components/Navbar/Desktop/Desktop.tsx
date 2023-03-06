import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg';

import brandSvg from '../../../assets/svgs/brand.svg';
import { LinkButton } from "../../LinkButton";

import { NavbarDesktopWrapper } from "./Desktop.styled";
import { NavbarDesktopProps } from "./Desktop.types";

export const NavbarDesktop = ({ children }: NavbarDesktopProps) => {
    return (
        <NavbarDesktopWrapper className="navbar-desktop">
            <div className="navbar-desktop__item navbar-desktop__item--1">
                <div className="nav-brand">
                    <ReactSVG
                        src={brandSvg}
                        role="img"
                        aria-label="Nubank logo marca"
                    />
                </div>

                <ul className="nav-menu">
                    {children}
                </ul>
            </div>

            <div className="navbar-desktop__item navbar-desktop__item--2">
                <LinkButton link="#" name="Quero ser Nubank" />
                <Link to="#"> Login </Link>
            </div>
        </NavbarDesktopWrapper>
    );
}
