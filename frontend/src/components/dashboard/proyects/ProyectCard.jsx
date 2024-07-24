import { NavLink } from "react-router-dom"

const ProyectCard = ({ proyect, idx, theme }) => {

  const style = {
    width: idx === 0 ? '65%' : '49%',
    height: '50dvh',
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
        className='flex flex-col p-4 justify-between rounded-2xl'
        to={`/dashboard/proyect/edit-proyect/${proyect.id}`}
        style={{...style, height: '55dvh'}}
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

        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <span className="w-auto">Participantes:</span>
            <p className="w-auto">{proyect.participants.length} miembros del grupo</p>
          </div>
          <div className="flex justify-end px-2">
            {
              proyect.participants.map(({ image }, idx) => (
                <img
                  className="-m-2 w-10 h-10"
                  src={image}
                  alt={'participante' + idx}
                  key={image}
                />
              ))
            }
          </div>
        </div>
      </NavLink>

  )
}

export default ProyectCard
