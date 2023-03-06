import styled from "styled-components";
import { handleTypefaceTitle } from "../../../styles/mixins";

export const NavbarItemMobileWrapper = styled.li`
    .nav-item-mobile-link {
        position: relative;
        display: inline-block;

        padding: ${props => props.theme.sizes.size16} ${props => props.theme.sizes.size24};
        color: ${props => props.theme.colors.gray200};
        ${handleTypefaceTitle({ size: 'h3', device: 'desktop' })};

        &::after {
            content: '';
            position: absolute;
            top: 90%;
            left: 16px;
            transition: 1s ease;

            width: 0%;
            height: ${props => props.theme.sizes.size2};
            background-color: ${props => props.theme.colors.secondaryNormal};
        }

        &:hover {
            color: ${props => props.theme.colors.primaryNormal};

            &::after {
                width: 100%;
            }
        }
    }
`;
