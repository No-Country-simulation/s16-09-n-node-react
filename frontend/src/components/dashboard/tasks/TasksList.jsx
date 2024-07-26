import { NavLink } from "react-router-dom"
import imag from './tasklist.svg'


const TasksList = () => {

const alerta = () => {

  alert("En desarrollo")
}

  return <div className="text-white flex flex-col gap-0 ml-0">

    <NavLink to={'/dashboard/add-task'}></NavLink>
    <ul className="list-none" >
  <img src={imag} alt="tasklist" onClick={alerta} />

    </ul>
  </div>
}

export default TasksList
