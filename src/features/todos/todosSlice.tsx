import { createSlice } from "@reduxjs/toolkit";
import _default from "react-redux/es/components/connect";

//Нужен будет пример для TypeScript

const initialState:any = {
    todos: [
    ]
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((el:any) => el.id !== action.payload.id)
            console.log(action.payload)
        },
        doneTodo: ( state, action) => {
            state.todos = state.todos.map((el:any) => el.id === action.payload.id ? el = {id: action.payload.id, time: action.payload.time, done: !action.payload.done, title: action.payload.title} : el)
        },
    }
})

export const {addTodo, removeTodo, doneTodo} = todosSlice.actions
export default todosSlice.reducer