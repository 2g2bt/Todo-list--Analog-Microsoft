import { createSlice } from "@reduxjs/toolkit";
import _default from "react-redux/es/components/connect";

//Нужен будет пример для TypeScript

const initialState:any = {
    todos: [
        {
            id: 121212,
            done: false,
            title: 'Помыть лапы'
        },
        {   
            id: 1278612538712635,
            done: false,
            title: 'Помыть голову'
        },
        {
            id: 2861237,
            done: true,
            title: 'Стать счастливым'
        },
        {
            id: 2867127963521,
            done: true,
            title: 'Купить молоко'
        },
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