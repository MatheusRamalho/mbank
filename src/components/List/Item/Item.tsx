import { ListItemWrapper } from "./Item.styled";
import { ListItemProps } from "./Item.types";

export const ListItem = ({ children, title, description }: ListItemProps) => {
    return (
        <ListItemWrapper className="list-item">
            <div className="list-item-icon">
                {children}
            </div>

            <div className="list-item-infos">
                {title && <strong> {title} </strong>}
                {description && <p> {description} </p>}
            </div>
        </ListItemWrapper>
    );
}
