import React from 'react';
import { Link } from 'react-router-dom';
import { SignOutButton } from '@clerk/clerk-react';
import { useTheme } from '../../../hooks/hookTheme'; 
import './sidebar.css';
import sun from '../../../assets/sun-icon.svg';
import moon from '../../../assets/moon-icon.svg';

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Inicio', icon: '/assets/home-icon.svg', link: '/dashboard/home' },
    { name: 'Proyectos', icon: '/assets/proyects-icon.svg', link: '/dashboard/proyects' },
    { name: 'Participantes', icon: '/assets/participants-icon.svg', link: '/dashboard/participants' },
    { name: 'Herramientas', icon: '/assets/tools-icon.svg', link: '/dashboard/tools' },
    { name: 'Reuniones', icon: '/assets/meetings-icon.svg', link: '/dashboard/meetings-details' },
    { name: 'Calendario', icon: '/assets/calendar-icon.svg', link: '/dashboard/calendar-details' },
    { name: 'Tareas', icon: '/assets/tasks-icon.svg', link: '/dashboard/tasks-list' },
    { name: 'Progreso', icon: '/assets/progress-icon.svg', link: '/dashboard/progress-details' },
    { name: 'Documentación', icon: '/assets/docs-icon.svg', link: '/dashboard/docs-details' },
  ];

  return (
    <div className={`sidebar ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
      <div className="sidebar-nav-links">
        {menuItems.map(item => (
          <div key={item.name} className="sidebar-item">
            <img alt={`${item.name} icon`} src={item.icon} className="sidebar-icon" />
            <Link to={item.link} className="sidebar-link">
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-item">
          <img alt="logout icon" src="/assets/logout-icon.svg" className="sidebar-icon" />
          <Link to="/logout" className="sidebar-link">
            <span className="sidebar-text">
              <SignOutButton />
            </span>
          </Link>
        </div>
        <img
          className="sidebar-theme-icon cursor-pointer"
          src={theme === 'light' ? sun : moon}
          alt="change theme icon"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

export default Sidebar;
