import { DropdownRootWrapper } from "./Root.styled";
import { DropdownRootProps } from "./Root.types";

export const DropdownRoot = ({ children }: DropdownRootProps) => {
    const handleDropdownClosed = (event: any) => {
        let item = event.currentTarget;
        item.classList.remove('dropdown-menu--active');
    }

    return (
        <DropdownRootWrapper
            className="dropdown-menu"
            onMouseLeave={(event) => handleDropdownClosed(event)}
        >
            {children}
        </DropdownRootWrapper>
    );
}
