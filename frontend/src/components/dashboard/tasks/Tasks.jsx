import Task from './Task'
import Task1 from './Task1'
import Task2 from './Task2'
import './tasks.css'

const Tasks = (props) => {
  return (
    <div className="tasks-tasks">
      <span className="tasks-title Heading1">
        <span>Tareas</span>
      </span>
      <div className="tasks-tasks-list">
        <Task></Task>
        <Task1></Task1>
        <Task2></Task2>
      </div>
      <img
        alt="plus-icon"
        src="/assets/plus-icon.svg"
        className="tasks-plus-icon"
      />
    </div>
  )
}

export default Tasks
