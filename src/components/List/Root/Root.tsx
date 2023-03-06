import { ListRootWrapper } from "./Root.styled";
import { ListRootProps } from "./Root.types";

export const ListRoot = ({ classe, children, isHorizontal = false }: ListRootProps) => {
    return (
        <ListRootWrapper
            className={`${classe} ${isHorizontal ? 'list--horizontal' : ''}`}
        >
            {children}
        </ListRootWrapper>
    );
}
