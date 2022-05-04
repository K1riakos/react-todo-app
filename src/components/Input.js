export const Input = (props) => {
  // props
  const inp = props.inp
  const setInp = props.setInp
  const tasks = props.tasks
  const setTasks = props.setTasks

  // handlers/methods
  const inputHandler = (e) => {
    setInp(e.target.value)
  }

  const addTasks = () => {
    if(inp !== "") {
      setTasks([...tasks, inp])
      setInp("")
    }
  }


  return (
    <div className="input-container">
      <input
        type="text"
        name="task"
        className="taskInput"
        value={inp}
        onChange={inputHandler}
      />
      <button onClick={addTasks}>Add</button>
    </div>
  )
}