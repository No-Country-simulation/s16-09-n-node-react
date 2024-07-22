import Task from './Task'
import Task1 from './Task1'
import Task2 from './Task2'
import './tasks.css'
import { useTheme } from '../../../context/ThemeContext'

const Tasks = (props) => {
const { theme } = useTheme()
const getFilterStyle = () => {
  return theme.text === "#e8e8e8" ? 
    'invert(0)' : 
    'invert(1)';
};

  return (
    <div className="tasks-tasks" style={{color: theme.titulos, backgroundColor: theme.background}}>
      <span className="tasks-title Heading1" tyle={{color: theme.titulos, backgroundColor: theme.background}}>
        <span>Tareas</span>
      </span>
      <div className="tasks-tasks-list" >
        <Task></Task>
        <Task1></Task1>
        <Task2></Task2>
      </div>
      <img
        alt="plus-icon"
        src="/assets/plus-icon.svg"
        className="tasks-plus-icon"

        style={{ filter: getFilterStyle() }}
      />
    </div>
  )
}

export default Tasks
