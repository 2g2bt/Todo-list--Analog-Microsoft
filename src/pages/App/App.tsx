import { useState } from 'react'
import s from './App.module.scss'
import list from '../../assets/list.svg'
import add from '../../assets/add.svg'
import undone from '../../assets/circle.svg'
import done from '../../assets/circle-done.svg'
import x from '../../assets/delete.svg'
import settings from '../../assets/settings.svg'

function App() {
  const [count, setCount] = useState(0)

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
            <div className={s.RightSide_ListTodos_Todo}>
              <div className={s.RightSide_ListTodos_Todo_text}>
                <img src={undone}/>
                <p>Погулять с собакой</p>
              </div>
              <img src={x}/>
            </div>
            
            </div>

          </div>
          <div className={s.RightSide_NewTodo}>
            <div className={s.RightSide_NewTodo_Form}>
              <button><img src={add}/>Добавить список</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
