import { LinkButtonWrapper } from "./LinkButton.styled";
import { LinkButtonProps } from "./LinkButton.types";

export function LinkButton({ name, link, children, classe, isSecondary = false, isTertiary = false, isQuaternary = false }: LinkButtonProps) {
    return (
        <LinkButtonWrapper
            className={`link-button ${classe} ${isSecondary ? 'link-button--secondary' : ''} ${isTertiary ? 'link-button--tertiary' : ''} ${isQuaternary ? 'link-button--quaternary' : ''}`}
            to={link ? link : '#'}
        >
            {name ? name : ''}
            {children}
        </LinkButtonWrapper>
    );
}
