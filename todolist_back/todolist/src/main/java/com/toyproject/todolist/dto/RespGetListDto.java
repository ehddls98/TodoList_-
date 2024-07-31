package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RespGetListDto {
    private int todoId;
    private String contents;
    private int status;
}
