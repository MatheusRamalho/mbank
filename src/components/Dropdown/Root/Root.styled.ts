import styled from "styled-components";

export const DropdownRootWrapper = styled.ul`
    position: absolute;
    top: 48px;
    left: 24px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    padding: ${props => props.theme.sizes.size16} ${props => props.theme.sizes.size24};
    background-color: ${props => props.theme.colors.whiteLight};
    border-radius: ${props => props.theme.sizes.size16};
    box-shadow: ${props => props.theme.shadows.purple3};
    opacity: 0;
    pointer-events: none; // Desaparece os links...
    transition: .7s ease;

    &.dropdown-menu--active {
        opacity: 1;
        pointer-events: all;
    }
`;
