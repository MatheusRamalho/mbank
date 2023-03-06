import { Link } from "react-router-dom";

import { DropdownItemWrapper } from "./Item.styled";
import { DropdownItemProps } from "./Item.types";

export const DropdownItem = ({ name, link }: DropdownItemProps) => {
    return (
        <DropdownItemWrapper className="dropdown-item">
            <Link
                className="dropdown-link"
                to={link ? link : '#'}
            >
                {name}
            </Link>
        </DropdownItemWrapper>
    );
}
