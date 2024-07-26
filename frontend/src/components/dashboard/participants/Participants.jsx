import { NavLink } from "react-router-dom"
import imag from './participantes.svg'
const Participants = () => {
    const alerta = () => {

        alert("En desarrollo")
      }
      
        return ( <div className="text-white flex flex-col gap-0 ml-0">
      
          <NavLink to={'/dashboard/add-task'}></NavLink>
           <img src={imag} alt="tasklist" onClick={alerta} />
        </div>
    )
}

export default Participants