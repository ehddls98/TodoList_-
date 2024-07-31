package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReqTodoUpdateDto {
    private int todoId;
    private String content;
}
