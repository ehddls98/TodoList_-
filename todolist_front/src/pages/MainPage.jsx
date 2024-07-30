import React from "react";
import HeaderContiner from "../components/HeaderContainer/HeaderContainer";
import ListContainer from "../components/ListContainer/ListContainer";
import { listContainer } from "../components/ListContainer/style";
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function MainPage(props) {
    return (
        <div >
            <HeaderContiner/>
            <div css={s.listContainer}>
                <ListContainer/>
                <ListContainer/>
                <ListContainer/>
            </div>
        </div>
    );
}

export default MainPage;