import { Link } from "react-router-dom";
import { ListItemActionWrapper } from "./Action.styled";
import { ListItemActionProps } from "./Action.types";

export const ListItemAction = ({ name, link, children }: ListItemActionProps) => {
    return (
        <ListItemActionWrapper className="list-item-action">
            <Link
                className="list-item-action-link"
                to={link ? link : '#'}
            >
                {children
                    ? <> {children} {name} </>
                    : <> {name} </>
                }
            </Link>
        </ListItemActionWrapper>
    );
}
