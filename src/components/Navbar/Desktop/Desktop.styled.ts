import styled from "styled-components";

export const NavbarDesktopWrapper = styled.nav`
    max-width: ${props => props.theme.containers.extraLarge};
    margin: 0 auto;
    padding: ${props => props.theme.sizes.size12} ${props => props.theme.sizes.size24};

    display: flex;
    justify-content: space-between;
    align-items: center;

    @include handleResponsive(s) {
        display: none;
    }

    .navbar-desktop__item {
        flex: 1 1 auto;
        display: flex;
        align-items: center;

        &--1 {
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .nav-brand {
                width: ${props => props.theme.sizes.size48};
                height: ${props => props.theme.sizes.size48};

                display: flex;
                justify-content: center;
                align-items: center;
            }

            .nav-menu {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
        }

        &--2 {
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            a:last-child:not(.button) {
                margin-left: ${props => props.theme.sizes.size16};
            }
        }
    }
`;
