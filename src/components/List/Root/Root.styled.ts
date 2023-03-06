import styled from "styled-components";

export const ListRootWrapper = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    &.list--horizontal {
        flex-direction: row;
        justify-content: center;
    }
`;
