import { v4 as uuidv4 } from 'uuid'

const Tasks = (props) => {
  // props
  const tasks = props.tasks
  const setTasks = props.setTasks

  const deleteTask = (taskName) => {
    setTasks(tasks.filter(task => task !== taskName))
  }

  return (
    <ul className="todos">
      {tasks.map(task => {
        let id = uuidv4()
        return (
          <li key={id}>{task} <button onClick={() => deleteTask(task)}>X</button></li>
        )
      })}
    </ul>
  )
}

export default Tasks
