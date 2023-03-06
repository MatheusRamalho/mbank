import styled from "styled-components";

export const NavbarMobileMenuWrapper = styled.nav`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.whiteNormal};
    transition: 1s ease;

    display: none;
    justify-content: center;
    align-items: center;

    @include handleResponsive(s) {
        display: flex;
    }

    opacity: 0;
    pointer-events: none;

    &.navbar-mobile-menu--active {
        opacity: 1;
        pointer-events: all;
    }

    .navbar-mobile-menu__list {
        max-width: ${props => props.theme.containers.extraLarge};

        display: flex;
        flex-direction: column;

        svg {
            width: ${props => props.theme.sizes.size36};
            height: ${props => props.theme.sizes.size36};

            path {
                transition: .7s ease;
            }

            &:hover {
                path {
                    stroke: ${props => props.theme.colors.primaryNormal};
                }
            }
        }
    }
`;
