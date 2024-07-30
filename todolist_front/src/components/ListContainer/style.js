import { css } from "@emotion/react";

export const listContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid #dbdbdb;
    width: 250px;
    height: 500px;

    
`;

export const todo = css`
    & button {
        width: 40px;
        height: 30px;
    }
`