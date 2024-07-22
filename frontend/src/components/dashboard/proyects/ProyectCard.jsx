import { NavLink } from "react-router-dom"

const ProyectCard = ({ proyect, idx, theme }) => {

  const style = {
    width: idx === 0 ? '65%' : '49%',
    height: '48%',
    backgroundColor: theme.background
  }

  return (
    idx === 0 ?
      <NavLink
        className='flex h-2/5 p-2 rounded-2xl'
        to={`/dashboard/proyect/edit-proyect/${proyect.id}`}
        style={style}
      >
        <div className="flex h-full flex-col justify-between p-4 overflow-auto" style={{ width: '49%' }}>
          <span>
            {proyect.name}
          </span>
          <p>
            Projecto{proyect.status === 'pending' ? ' en curso' : 'terminado'}
          </p>
          <img
            className="max-w-fit max-h-24"
            src={proyect.image}
            alt={proyect.name}
          />
          <div className="flex w-full justify-between text-xs m-0 p-0">
            <p className="w-auto">Inicio: {proyect.beginning}</p>
            <p className="w-auto">{proyect.status === 'finished' ? 'Entregado: ' : 'Entrega: '}: {proyect.deadline}</p>
          </div>
        </div>
        <div className="flex flex-col p-2 h-full" style={{ width: '49%' }}>
          <span>
            Contexto:
          </span>
          <p className=" h-4/5 overflow-auto no-scrollbar">
            {proyect.description}
          </p>
        </div>
      </NavLink>
      :
      <NavLink
        className='h-2/5 flex flex-col justify-between p-4 rounded-2xl'
        to={`/dashboard/proyect/edit-proyect/${proyect.id}`}
        style={style}
      >
        <span>
          {proyect.name}
        </span>
        <p>
          Projecto{proyect.status === 'pending' ? ' en curso' : 'terminado'}
        </p>
        <img
          className="w-full max-h-32"
          src={proyect.image}
          alt={proyect.name}
        />
        <div className="flex w-full justify-between text-xs m-0 p-0">
          <p className="w-auto">Inicio: {proyect.beginning}</p>
          <p className="w-auto">{proyect.status === 'finished' ? 'Entregado: ' : 'Entrega: '}: {proyect.deadline}</p>
        </div>
        {
          idx % 2 !== 0 ? 
          'impar' 
          : 
          'par'
        }
      </NavLink>

  )
}

export default ProyectCard
