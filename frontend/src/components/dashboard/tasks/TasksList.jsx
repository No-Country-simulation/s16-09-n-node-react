import { NavLink } from "react-router-dom"

const TasksList = () => {
  return <div className="text-white flex flex-col items-start gap-4">
    component tasks list
    <NavLink to={'/dashboard/add-task'}>Agregar Tarea</NavLink>
    <ul className="list-none">
      <li><NavLink className={'text-white'} to={'/dashboard/task-details/task_1'}>Tarea 1</NavLink></li>
      <li><NavLink className={'text-white'} to={'/dashboard/task-details/task_2'}>Tarea 2</NavLink></li>
      <li><NavLink className={'text-white'} to={'/dashboard/task-details/task_3'}>Tarea 3</NavLink></li>
    </ul>
  </div>
}

export default TasksList
