import { type } from "os"

export interface Todo{
    id:string,
    text:string
}

export interface AddTodoRequestBody{
    text:string,
}
export interface UpdateTodoRequestBody{
    text:string,
}
export interface TodoUrlParams{
    todoId:string
}