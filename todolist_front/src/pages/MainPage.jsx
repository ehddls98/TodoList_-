import React, { useEffect, useState } from "react";
import HeaderContiner from "../components/HeaderContainer/HeaderContainer";
import ListContainer from "../components/ListContainer/ListContainer";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from "../apis/instance";
import { useRecoilState } from "recoil";
import { dateStateAtom } from "../components/atoms/dateAtom";


function MainPage(props) {
    const [ dateState, setDateState ] = useRecoilState(dateStateAtom);
    const [ todoList, setTodoList ] = useState([]);

    useEffect(() => {
        getTodoList();
    }, [])

    const getTodoList = async() => {
        try {
            const response = await api.get(`/todoList/${dateState}`);
            setTodoList(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
         <HeaderContiner getTodoList={getTodoList}/>
            <div css={s.listsContainer}>
                <ListContainer todoList={todoList} getTodoList={getTodoList}/>
                <ListContainer todoList={todoList.filter(todo => todo.status === 0)} getTodoList={getTodoList}/>
                <ListContainer todoList={todoList.filter(todo => todo.status === 1)} getTodoList={getTodoList}/>
            </div>
        </>
           

    );
}

export default MainPage;