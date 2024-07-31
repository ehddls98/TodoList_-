import { css } from "@emotion/react";

export const todoContainer = css`
    display: flex;
    flex-direction: column;
    border: 4px solid;
    border-radius: 10px;
    width: 600px;
    height: 800px;    
`
export const todoListTitle = css`
    display: flex;
    justify-content: center;
    border-bottom: 4px solid;
    & b {
        font-size: 40px;
        
    }
`
export const todo = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-top: 5px;
    border-bottom: 1px solid #000000;
    & input {
        :hover {
            cursor: pointer;
        }
    }
    & label {
        width: 400px;
    }
    & button {
        margin: 2px;
        width: 50px;
        height: 25px;
        background-color: #000000;
        color: #fafafa;
        border-radius: 20px;
        border: 2px solid #000000;
        :hover {
            cursor: pointer;
        }
        :active {
            box-shadow: inset -.3rem -.1rem 1.4rem #FBFBFB, inset .3rem .4rem .8rem #BEC5D0; 
        }
    }
`

export const modalLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;