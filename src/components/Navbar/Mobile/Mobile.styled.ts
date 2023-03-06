import styled from "styled-components";

export const NavbarMobileWrapper = styled.nav`
    max-width: ${props => props.theme.containers.extraLarge};
    margin: 0 auto;
    padding: ${props => props.theme.sizes.size12} ${props => props.theme.sizes.size24};

    display: none;
    justify-content: space-between;
    align-items: center;

    @include handleResponsive(s) {
        display: flex;
    }

    .nav-hamburguer {
        z-index: 998;
        position: relative;

        cursor: pointer;
        width: ${props => props.theme.sizes.size36};
        height: ${props => props.theme.sizes.size36};
        transition: .7s ease;

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 30%;
            left: 16%;

            width: 70%;
            height: ${props => props.theme.sizes.size2};
            background-color: ${props => props.theme.colors.primaryNormal};
            transition: .8s ease;
        }

        &::after {
            top: 60%;
        }

        &--active {
            &::before {
                top: 50%;
                transform: rotate(-135deg);
            }

            &::after {
                top: 50%;
                transform: rotate(315deg);
            }
        }
    }

    .nav-brand {
        width: ${props => props.theme.sizes.size48};
        height: ${props => props.theme.sizes.size48};

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
