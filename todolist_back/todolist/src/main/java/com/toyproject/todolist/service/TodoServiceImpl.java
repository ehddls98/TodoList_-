package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqTodoUpdateDto;
import com.toyproject.todolist.dto.RespGetListDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoServiceImpl implements TodoService{

    @Autowired
    private TodoMapper todoMapper;

    @Override
    public int addTodo(ReqAddTodoDto reqAddTodoDto) {
        Todo todo = Todo.builder()
                .content(reqAddTodoDto.getContents())
                .status(reqAddTodoDto.getStatus())
                .date(reqAddTodoDto.getDate())
                .build();

        return todoMapper.save(todo);
    }

    @Override
    public List<RespGetListDto> getTodoList(String date) {
        List<RespGetListDto> respGetListDto = new ArrayList<>();
        List<Todo> todo = todoMapper.getTodoList(date);

        for(Todo toDto : todo) {
            RespGetListDto dto = RespGetListDto.builder()
                    .todoId(toDto.getTodoId())
                    .contents(toDto.getContent())
                    .status(toDto.getStatus())
                    .build();
            respGetListDto.add(dto);
        }
        return respGetListDto;
    }

    @Override
    public int deleteTodo(int todoId) {
        return todoMapper.delete(todoId);
    }

    @Override
    public int updateTodoStatus(int todoId) {
        return todoMapper.updateStatus(todoId);
    }

    @Override
    public int updateTodoContent(ReqTodoUpdateDto reqTodoUpdateDto) {
        Todo todo = Todo.builder()
                .todoId(reqTodoUpdateDto.getTodoId())
                .content(reqTodoUpdateDto.getContent())
                .build();

        return todoMapper.updateTodoContent(todo);
    }
}
