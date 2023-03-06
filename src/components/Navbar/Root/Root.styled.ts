import styled from "styled-components";
import { handleTypefaceTitle } from "../../../styles/mixins";

export const NavbarRootWrapper = styled.header`
    position: fixed;
    z-index: 999;

    width: 100%;
    height: 4.5rem;
    background-color: transparent;
    box-shadow: none;
    transition: .5s ease;

    &.header--active {
        background-color: ${props => props.theme.colors.whiteDark};
        box-shadow: ${props => props.theme.shadows.purple3};
    }
`;
