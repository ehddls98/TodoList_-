import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../apis/instance';

function HeaderContiner(props) {

    const [ todo, setTodo ] = useState({
        contents:"",
        status: 0,
        date: ""
    });

    const handleInputChange = (e) => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();

        setTodo(todo => {
            return {
                ...todo,
                [e.target.name]: e.target.value,
                date: `${year}-${month}-${date}`
            }
        })
    }

    const handleAddClick = async() => {
        let responseData = null;
        try {
            const response = await api.post("/todo", todo);
            responseData = response.data;
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div css={s.headercontainer}>
                <h1 css={s.title}>To-Do List</h1>
                <div>
                    <input type="text" name="contents" value={todo.contents} onChange={handleInputChange}/>
                    <button onClick={handleAddClick}>추가</button>
                </div>
            </div>
            <div css={s.updateContainer}>
                <input type="date" />
                <button>조회</button>
            </div>
        </>
        
    );
}

export default HeaderContiner;