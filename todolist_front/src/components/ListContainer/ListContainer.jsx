import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../apis/instance';
import ReactModal from 'react-modal';

function ListContainer({ todoList, getTodoList }) {

    const [ isModalOpen, setModalOpen ] = useState(false);
    const [ content, setContents ] = useState({
        todoId: "",
        content: ""
    });

    const handleCheckChange = async(e) => {
        try {
            const response = await api.put(`/todo/${e.target.id}/status`);
            getTodoList();
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDeleteClick = async(e) => {
        try {
            const response = await api.delete(`/todo/${e.target.name}`);
            getTodoList();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const closeModal = () => {
        setModalOpen(false);
    }



    const handleUpdateClick = (e) => {
        setModalOpen(true);
        setContents (todo => {
            return {
                ...todo,
                todoId: e.target.name
            }
            
        })
    }

    const handleCompleteClick = async() => {
        console.log(content);
        try {
            const response = await api.put("/todo", content);
            closeModal();
            getTodoList();
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }


    }

    const handleCancelClick = () => {
        setModalOpen(false);
    }

    const handleInputChange = (e) => {
        setContents(todo => {
            return {
                ...todo,
                content: e.target.value
            }
            
        })
    }

    return (
        
        <div css={s.todoContainer}>
            <ReactModal
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '300px',
                        height: '300px',
                        backgroundColor: '#fafafa',
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <div css={s.modalLayout}>
                    <h2>ToDo 수정</h2>
                    <input type="text" name="content" onChange={handleInputChange}/>
                    <div>
                        <button onClick={handleCompleteClick}>완료</button>
                        <button onClick={handleCancelClick}>취소</button>
                    </div>
                </div>
            </ReactModal>
            <div css={s.todoListTitle}>
                <b>Todo</b>
            </div>
            {
            todoList.map(todo => 
            <div key={todo.todoId} css={s.todo}>
                <input id={todo.todoId} type="checkbox" checked={todo.status === 1} onChange={handleCheckChange}/>
                <label htmlFor={todo.todoId}>{todo.contents}</label>
                <button name={todo.todoId} onClick={handleUpdateClick}>수정</button>
                <button name={todo.todoId} onClick={handleDeleteClick}>삭제</button>
            </div>
                )
            }
            
        </div>
    );
}

export default ListContainer;