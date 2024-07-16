import { SignOutButton } from '@clerk/clerk-react';
import './sidebar.css';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="sidebar-link">
            <span className="sidebar-text">
              Home
            </span>
          </Link>
        </div>
        <div className="sidebar-projects">
          <img
            alt="projects icon"
            src="/assets/proyects-icon.svg"
            className="sidebar-projects-icon"
          />
          <Link to="/projects" className="sidebar-link">
            <span className="sidebar-text02">
              Proyectos
            </span>
          </Link>
        </div>
        <div className="sidebar-participants">
          <img
            alt="participants-icon"
            src="/assets/participants-icon.svg"
            className="sidebar-participants-icon"
          />
          <Link to="/participantes" className="sidebar-link">
            <span className="sidebar-text04">
              Participantes
            </span>
          </Link>
        </div>
        <div className="sidebar-tools">
          <img
            alt="tools icon"
            src="/assets/tools-icon.svg"
            className="sidebar-tools-icon"
          />
          <Link to="/tools" className="sidebar-link">
            <span className="sidebar-text06">
              Herramientas
            </span>
          </Link>
        </div>
        <div className="sidebar-meetings">
          <img
            alt="meetings-icon"
            src="/assets/meetings-icon.svg"
            className="sidebar-meetings-icon"
          />
          <Link to="/meetings" className="sidebar-link">
            <span className="sidebar-text08">
              Reuniones
            </span>
          </Link>
        </div>
        <div className="sidebar-calendar">
          <img
            alt="calendar icon"
            src="/assets/calendar-icon.svg"
            className="sidebar-calendar-icon"
          />
          <Link to="/calendar" className="sidebar-link">
            <span className="sidebar-text10">
              Calendario
            </span>
          </Link>
        </div>
        <div className="sidebar-tasks">
          <img
            alt="tasks icon"
            src="/assets/tasks-icon.svg"
            className="sidebar-tasks-icon"
          />
          <Link to="/tasks" className="sidebar-link">
            <span className="sidebar-text12">
              Tareas
            </span>
          </Link>
        </div>
        <div className="sidebar-progress">
          <img
            alt="progress icon"
            src="/assets/progress-icon.svg"
            className="sidebar-progress-icon"
          />
          <Link to="/progress" className="sidebar-link">
            <span className="sidebar-text14">
              Progreso
            </span>
          </Link>
        </div>
        <div className="sidebar-docs">
          <img
            alt="docs icon"
            src="/assets/docs-icon.svg"
            className="sidebar-docs-icon"
          />
          <Link to="/docs" className="sidebar-link">
            <span className="sidebar-text15">
              Documentación
            </span>
          </Link>
        </div>
      </div>
      <div className="sidebar-logout-theme">
        <div className="sidebar-logout">
          <img
            alt="logout icon"
            src="/assets/logout-icon.svg"
            className="sidebar-logout-icon"
          />
          <Link to="/logout" className="sidebar-link">
            <span className="sidebar-text17 Heading3">
            <SignOutButton  /> 
            </span>
          </Link>
        </div>
        <img className='sidebar-theme-icon' src="/assets/sun-icon.svg" alt="change theme icon" />
      </div>
    </div>
  );
}

export default Sidebar;
