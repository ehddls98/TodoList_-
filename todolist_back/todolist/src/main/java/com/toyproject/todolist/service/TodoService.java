package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;

public interface TodoService {
    int addTodo(ReqAddTodoDto reqAddTodoDto);
}
