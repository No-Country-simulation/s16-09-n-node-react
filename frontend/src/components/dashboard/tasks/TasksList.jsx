
import { useState } from 'react';
import { NavLink } from "react-router-dom"
  import imag from './tasklist.svg'
  
const Tasks = () => {
  const [activeTab, setActiveTab] = useState('UX/UI');

  const tabs = ['UX/UI', 'Frontend', 'Backend', 'QA', 'Data Analysis'];
  
  // Example tasks
  const tasks = {
    'UX/UI': [
      { id: 1, text: 'Rediseñar la página de inicio', imgSrc: '/assets/user1.png' },
      { id: 2, text: 'Crear wireframes para nueva funcionalidad', imgSrc: '/assets/user2.png' },
    ],
    'Frontend': [
      { id: 1, text: 'Implementar diseño de página de inicio', imgSrc: '/assets/user3.png' },
      { id: 2, text: 'Configurar ambiente de desarrollo', imgSrc: '/assets/user4.png' },
    ],
    'Backend': [
      { id: 1, text: 'Desarrollar API de autenticación', imgSrc: '/assets/user5.png' },
      { id: 2, text: 'Optimizar base de datos', imgSrc: '/assets/user6.png' },
    ],
    'QA': [
      { id: 1, text: 'Crear casos de prueba', imgSrc: '/assets/user7.png' },
      { id: 2, text: 'Realizar pruebas de integración', imgSrc: '/assets/user8.png' },
    ],
    'Data Analysis': [
      { id: 1, text: 'Analizar datos de usuario', imgSrc: '/assets/user9.png' },
      { id: 2, text: 'Generar reportes de rendimiento', imgSrc: '/assets/user10.png' },
    ],
  };



  
  
  const alerta = () => {
  
    alert("En desarrollo")
  }
  
  return (
    
    <div>
    <div className="text-white flex flex-col gap-0 ml-0">

    <NavLink to={'/dashboard/add-task'}></NavLink>
    <ul className="list-none" >
  <img src={imag} alt="tasklist" onClick={alerta} />

    </ul>
  </div>

    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Tareas</h2>
      <p className="text-lg text-gray-600 mb-6">Red social para compartir skills</p>
      <div className="mb-6">
        <div className="flex space-x-4 border-b border-gray-300">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`py-2 px-4 text-lg font-medium ${
                activeTab === tab
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Por realizar</h3>
          {tasks[activeTab].filter(task => task.status === 'Por realizar').map(task => (
            <div key={task.id} className="flex items-center mb-4">
              <img src={task.imgSrc} alt="Collaborator" className="w-10 h-10 rounded-full mr-3" />
              <p>{task.text}</p>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">En proceso</h3>
          {tasks[activeTab].filter(task => task.status === 'En proceso').map(task => (
            <div key={task.id} className="flex items-center mb-4">
              <img src={task.imgSrc} alt="Collaborator" className="w-10 h-10 rounded-full mr-3" />
              <p>{task.text}</p>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Revisiones</h3>
          {tasks[activeTab].filter(task => task.status === 'Revisiones').map(task => (
            <div key={task.id} className="flex items-center mb-4">
              <img src={task.imgSrc} alt="Collaborator" className="w-10 h-10 rounded-full mr-3" />
              <p>{task.text}</p>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Terminadas</h3>
          {tasks[activeTab].filter(task => task.status === 'Terminadas').map(task => (
            <div key={task.id} className="flex items-center mb-4">
              <img src={task.imgSrc} alt="Collaborator" className="w-10 h-10 rounded-full mr-3" />
              <p>{task.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tasks;
