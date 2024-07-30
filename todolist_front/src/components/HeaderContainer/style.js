import { css } from "@emotion/react";

export const headercontainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
    & input {
        width: 400px;
        height: 25px;
    }
`;

export const title = css`
    font-size: 50px;
`;



export const updateContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`;