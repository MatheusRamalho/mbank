import styled from "styled-components";

export const NavbarItemWrapper = styled.li`
    position: relative;
    margin-left: ${props => props.theme.sizes.size16};

    .nav-item-link {
        position: relative;

        display: inline-block;
        padding: ${props => props.theme.sizes.size12} ${props => props.theme.sizes.size16};

        &::after {
            content: '';
            position: absolute;
            top: 42%;
            right: -4px;

            width: ${props => props.theme.sizes.size8};
            height: ${props => props.theme.sizes.size8};
            border-right: ${props => props.theme.sizes.size2} solid ${props => props.theme.colors.primaryNormal};
            border-bottom: ${props => props.theme.sizes.size2} solid ${props => props.theme.colors.primaryNormal};
            border-radius: ${props => props.theme.sizes.size1};
            transform: rotate(45deg);
            transition: .2s linear;
        }

        &:hover {
            &::after {
                top: 45%;
            }
        }
    }
`;
