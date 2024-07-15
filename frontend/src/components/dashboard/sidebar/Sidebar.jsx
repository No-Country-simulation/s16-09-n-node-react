import './sidebar.css'

const Sidebar = (props) => {
  return (
    <div className="sidebar-sidebar">
      <div className="sidebar-nav-links">
        <div className="sidebar-home">
          <img
            alt="home icon"
            src="/assets/home-icon.svg"
            className="sidebar-home-icon"
          />
          <span className="sidebar-text">
            Home
          </span>
        </div>
        <div className="sidebar-projects">
          <img
            alt="proyects icon"
            src="/assets/proyects-icon.svg"
            className="sidebar-projects-icon"
          />
          <span className="sidebar-text02">
            Proyectos
          </span>
        </div>
        <div className="sidebar-participants">
          <img
            alt="participants-icon"
            src="/assets/participants-icon.svg"
            className="sidebar-participants-icon"
          />
          <span className="sidebar-text04">
            Participantes
          </span>
        </div>
        <div className="sidebar-tools">
          <img
            alt="tools icon"
            src="/assets/tools-icon.svg"
            className="sidebar-tools-icon"
          />
          <span className="sidebar-text06">
            Herramientas
          </span>
        </div>
        <div className="sidebar-meetings">
          <img
            alt="meetings-icon"
            src="/assets/meetings-icon.svg"
            className="sidebar-meetings-icon"
          />
          <span className="sidebar-text08">
            Reuniones
          </span>
        </div>
        <div className="sidebar-calendar">
          <img
            alt="calendar icon"
            src="/assets/calendar-icon.svg"
            className="sidebar-calendar-icon"
          />
          <span className="sidebar-text10">
            Calendario
          </span>
        </div>
        <div className="sidebar-tasks">
          <img
            alt="tasks icon"
            src="/assets/tasks-icon.svg"
            className="sidebar-tasks-icon"
          />
          <span className="sidebar-text12">
            Tareas
          </span>
        </div>
        <div className="sidebar-progress">
          <img
            alt="progress icon"
            src="/assets/progress-icon.svg"
            className="sidebar-progress-icon"
          />
          <span className="sidebar-text14">
            Progreso
          </span>
        </div>
        <div className="sidebar-docs">
          <img
            alt="docs icon"
            src="/assets/docs-icon.svg"
            className="sidebar-docs-icon"
          />
          <span className="sidebar-text15">
            Documentación
          </span>
        </div>
      </div>
      <div className="sidebar-logout-theme">
        <div className="sidebar-logout">
          <img
            alt="logout icon"
            src="/assets/logout-icon.svg"
            className="sidebar-logout-icon"
          />
          <span className="sidebar-text17 Heading3">
            Cerrar Sesión
          </span>
        </div>
        <img className='sidebar-theme-icon' src="/assets/sun-icon.svg" alt="change theme icon" />
      </div>
    </div>
  )
}

export default Sidebar
