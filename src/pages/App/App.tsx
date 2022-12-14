import s from './App.module.scss'
import list from '../../assets/list.svg'
import add from '../../assets/add.svg'
import undone from '../../assets/circle.svg'
import done from '../../assets/circle-done.svg'
import x from '../../assets/delete.svg'
import confirm from '../../assets/check.svg'
import settings from '../../assets/settings.svg'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, removeTodo, doneTodo} from '../../features/todos/todosSlice'
import uuid4 from 'uuid4'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function App() {

  const {listActive} = useParams()

  const todoLists = useSelector((state:any) => state.todos.lists)
  const name = useSelector((state:any) => state.todos.lists[Number(listActive) - 1].name)
  const todos = useSelector((state:any) => state.todos.lists[Number(listActive) - 1].todos)
  const dispatch = useDispatch()
  const [input, setInput] = useState(false)

  const [todoTitle, setTodoTitle] = useState('')

  const id = uuid4()
  const time = +new Date()
  const todo = {
    id: id,
    time: time,
    done: false,
    title: todoTitle,
  }

  const addNewTodo = () => {
    setInput(() => !input);
  }
  const sendTodoData = (data:any) => {
    addNewTodo();
    dispatch(addTodo(data))
  }

  return (
    <div className="App">
      <div className={s.Header}>
        <h1>TODO</h1>
        <a href='https://github.com/TePMo-Tapo4eK' target="_blank">made by Zakhar Ukhanov</a>
      </div>
      <div className={s.AppContent}>
        <div className={s.LeftSide}>
          <ul>
            {todoLists.map((el:any, index: number)=>(<li><Link key={index} to={`/${index + 1}`} className={ index + 1 == Number(listActive) ? s.active : s.li}><img src={list}/><h2>{el.name}</h2></Link></li>))}
          </ul>
          <button><img src={add}/>Добавить список</button>
        </div>
        <div className={s.RightSide}>
          <div className={s.RightSide_ListTodos}>
            <div className={s.RightSide_ListTodos_title}>
              <h1>{name}</h1>
              <img src={settings}/>
            </div>
            <div className={s.List}>
              {todos.map((el:any, index:any) => {
               return !el.done ?  
                <div key={index} className={s.undone}>
                  <div className={s.RightSide_ListTodos_Todo}>
                    <div className={s.RightSide_ListTodos_Todo_text}>
                      <img onClick={()=> dispatch(doneTodo(el))} src={el.done ? done : undone}/>
                      <p>{el.title}</p>
                    </div>
                    <img onClick={() => dispatch(removeTodo(el))} src={x}/>
                  </div>
                </div>
               : null})}
              <div className={todos.length > 0 ? s.line : s.none}></div>
              {todos.map((el:any, index:any) => {
                return !!el.done ?
                (
                <div key={index} className={s.done}>
                  <div className={s.RightSide_ListTodos_Todo}>
                    <div className={s.RightSide_ListTodos_Todo_text}>
                      <img onClick={()=> dispatch(doneTodo(el))} src={el.done ? done : undone}/>
                      <p>{el.title}</p>
                    </div>
                    <img onClick={() => dispatch(removeTodo(el))} src={x}/>
                  </div>
                </div>
              ) : null})}
            
            </div>

          </div>
          <div className={s.RightSide_NewTodo}>
            <div className={s.RightSide_NewTodo_Form}>
              {input ? 
              <div className={s.input}>
                <img src={undone}/>
                <input type='text' placeholder='Текст задачи' onChange={(e) => setTodoTitle(e.target.value)}/>
                <img src={confirm} onClick={() => sendTodoData(todo)}/>
              </div> 
              
              :
              <button onClick={() => addNewTodo()}><img src={add}/>Добавить задачу</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
