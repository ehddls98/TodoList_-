import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../apis/instance';
import { useRecoilState } from 'recoil';
import { dateStateAtom } from '../atoms/dateAtom';

function HeaderContiner({ getTodoList }) {

    const [ dateState, setDateState ] = useRecoilState(dateStateAtom);
    const [ todo, setTodo ] = useState({
        contents:"",
        status: 0,
        date: ""
    });

    const handleEnterInput = (e) => {
        if(e.key === "Enter") {
            handleAddClick();
        }
    }

    const handleInputChange = (e) => {
        const today = new Date();
        const year = today.getFullYear();
        const temp = today.getMonth() + 1;
        const month = temp - 10 < 0 ? "0" + temp : temp;
        const date = today.getDate();

        setTodo(todo => {
            return {
                ...todo,
                [e.target.name]: e.target.value,
                date: `${year}-${month}`
            }
        })
    }

    const handleAddClick = async() => {
        try {
            const response = await api.post("/todo", todo);
            getTodoList();
            console.log(response);
        } catch (error) {
            console.error(error);
        }

        setTodo({
            contents:"",
            status: 0,
            date: ""
        });
    }

    const handleSearchClick = () => {
        getTodoList();
    }

    const handleDateChange = (e) => {
        setDateState(e.target.value);
    }

    return (
        <>
            <div css={s.title}>
                <h1>To-Do List</h1>
            </div>
            <div css={s.input}>
                <input type="text" 
                    name="contents" 
                    value={todo.contents} 
                    onChange={handleInputChange}
                    placeholder='할 일을 입력하세요.'
                    onKeyDown={handleEnterInput}
                />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <div css={s.dateSelectContainer}>
                <b>Todo 월별 조회</b>           
                <input type="month" onChange={handleDateChange} value={dateState}/>
                <button onClick={handleSearchClick}>조회</button>
            </div>
            
        </>
        
    );
}

export default HeaderContiner;