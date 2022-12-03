import s from './App.module.scss'
import list from '../../assets/list.svg'
import add from '../../assets/add.svg'
import undone from '../../assets/circle.svg'
import done from '../../assets/circle-done.svg'
import x from '../../assets/delete.svg'
import settings from '../../assets/settings.svg'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, removeTodo, doneTodo} from '../../features/todos/todosSlice'
import uuid4 from 'uuid4'

function App() {

  const todos = useSelector((state:any) => state.todos.todos)
  const dispatch = useDispatch()

  const id = uuid4()
  const time = +new Date()
  const todo = {
    id: id,
    time: time,
    done: false,
    title: "Выспаться",
  }

  return (
    <div className="App">
      <div className={s.Header}>
        <h1>TODO</h1>
        <p>made by Zakhar Ukhanov</p>
      </div>
      <div className={s.AppContent}>
        <div className={s.LeftSide}>
          <ul>
            <li className={s.active}><img src={list}/><h2>Понедельник</h2></li>
            <li><img src={list}/><h2>Понедельник</h2></li>
            <li><img src={list}/><h2>Понедельник</h2></li>
          </ul>
          <button><img src={add}/>Добавить список</button>
        </div>
        <div className={s.RightSide}>
          <div className={s.RightSide_ListTodos}>
            <div className={s.RightSide_ListTodos_title}>
              <h1>Понедельник</h1>
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
              <button onClick={() => dispatch(addTodo(todo))}><img src={add}/>Добавить список</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
