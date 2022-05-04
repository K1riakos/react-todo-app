import { useState } from "react"
import "./App.css"

// Components
import { Input } from "./components/Input"
import Tasks from "./components/Tasks"

export const App = () => {
  // input tracking
  const [inp, setInp] = useState('')
  // tasks list
  const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <h1>Simple Todo App</h1>
      <div className="todo-container">
        <Input inp={inp} setInp={setInp} tasks={tasks} setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  )
}