import { createSlice } from "@reduxjs/toolkit";
import _default from "react-redux/es/components/connect";

//Нужен будет пример для TypeScript

const initialState:any = {
    lists: [
        {todos: []},
    ]
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.lists[0].todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.lists[0].todos = state.lists[0].todos.filter((el:any) => el.id !== action.payload.id)
            console.log(action.payload)
        },
        doneTodo: ( state, action) => {
            state.lists[0].todos = state.lists[0].todos.map((el:any) => el.id === action.payload.id ? el = {id: action.payload.id, time: action.payload.time, done: !action.payload.done, title: action.payload.title} : el)
        },
    }
})

export const {addTodo, removeTodo, doneTodo} = todosSlice.actions
export default todosSlice.reducer