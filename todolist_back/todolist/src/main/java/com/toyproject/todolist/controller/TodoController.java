package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqTodoUpdateDto;
import com.toyproject.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/todo")
    public ResponseEntity<?> addTodo(@RequestBody ReqAddTodoDto reqAddTodoDto) {
        return ResponseEntity.ok().body(todoService.addTodo(reqAddTodoDto));
    }

    @GetMapping("/todoList/{date}")
    public ResponseEntity<?> getTodoList(@PathVariable String date) {
        return ResponseEntity.ok().body(todoService.getTodoList(date));
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> deleteTodo(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.deleteTodo(todoId));
    }

    @PutMapping("/todo/{todoId}/status")
    public ResponseEntity<?> updateTodoStatus(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.updateTodoStatus(todoId));
    }

    @PutMapping("/todo")
    public ResponseEntity<?> updateTodoContent(@RequestBody ReqTodoUpdateDto reqTodoUpdateDto) {
        return ResponseEntity.ok().body(todoService.updateTodoContent(reqTodoUpdateDto));
    }
}
