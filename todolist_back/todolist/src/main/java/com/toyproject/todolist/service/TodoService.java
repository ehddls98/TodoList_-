package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqTodoUpdateDto;
import com.toyproject.todolist.dto.RespGetListDto;

import java.util.List;

public interface TodoService {
    int addTodo(ReqAddTodoDto reqAddTodoDto);
    List<RespGetListDto> getTodoList(String date);
    int deleteTodo(int todoId);
    int updateTodoStatus(int todoId);
    int updateTodoContent(ReqTodoUpdateDto reqTodoUpdateDto);
}
