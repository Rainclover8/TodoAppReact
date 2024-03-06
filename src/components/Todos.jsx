import React from 'react'

import { useState } from 'react'
import './todos.css'

function Todos() {

    const [tasks, setTasks] = useState("")
    const [NewTask, SetNewTask] = useState([])

    const changeHandler = (e) =>{
        setTasks(e.target.value)
       
    }
    const dutyHandler = () =>{
        SetNewTask([tasks, ...NewTask])
        setTasks('')
    }
  



  return (
    <div>
        <div className='taskDetails'>
            <input type="text" onChange={changeHandler} value={tasks} />
            <h1>Yapılacaklar</h1>

            {
                NewTask.map((görev) =>{
                    return <h4>{görev}</h4>
                })
            }


            
            <button onClick={dutyHandler}>Görev Ekle</button>
        </div>
    </div>
  )
}

export default Todos