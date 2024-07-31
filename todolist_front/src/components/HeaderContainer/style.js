import { css } from "@emotion/react";
import { IoIosAddCircle } from "react-icons/io";

export const title = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    font-size: 30px;
`

export const input = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    & input {
        width: 30%;
        height: 70%;
        margin: 20px;
        border: 4px solid;
        border-radius: 10px;
    }
    & button {
        width: 70px;
        height: 80%;
        border: 2px solid #000000;
        border-radius: 20px;
        background-color: #000000;
        color: #fafafa;
        box-shadow:.8rem .5rem 1.4rem  #BEC5D0, -.3rem -.4rem .8rem #FBFBFB;
        :hover {
            cursor: pointer;
            
        }
        :active {
            box-shadow: inset -.3rem -.1rem 1.4rem #FBFBFB, inset .3rem .4rem .8rem #BEC5D0; 
        }
    & ::placeholder {
        text-indent: calc(45% - 4ch);
        }   
    }
`
export const dateSelectContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    width: 100%;
    height: 50px;
    & input {
        width: 180px;
        height: 30px;
        margin: 0px 10px;
        border: 3px solid;
        border-radius: 5px;
        :hover {
            cursor: pointer;
        }
    }
    & button {
        width: 60px;
        height: 35px;
        border: 2px solid #000000;
        border-radius: 20px;
        background-color: #000000;
        color: #fafafa;
        box-shadow:.8rem .5rem 1.4rem  #BEC5D0, -.3rem -.4rem .8rem #FBFBFB;
        :hover {
            cursor: pointer;
        }
        :active {
            box-shadow: inset -.3rem -.1rem 1.4rem #FBFBFB, inset .3rem .4rem .8rem #BEC5D0;
        }
    }
`