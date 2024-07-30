import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ListContainer(props) {
    return (
        <div css={s.listContainer}>
            <div css={s.todo}>
                <input type="checkbox" />
                <label htmlFor=""></label>
                <button>수정</button>
                <button>삭제</button>
            </div>
            
        </div>
    );
}

export default ListContainer;