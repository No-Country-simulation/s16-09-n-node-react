import { useTheme } from "@/context/themecontext";
import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Aos from "aos"

import "./sidebar.css";

import moon from "/assets/moon-icon.svg";
import sun from "/assets/sun-icon.svg";
import { useEffect } from "react";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();


useEffect (()=> {

Aos.init({duration: 1000})

}, []  )

  const menuItems = [
    { name: "Inicio", icon: "/assets/home-icon.svg", link: "/dashboard/home" },
    {
      name: "Proyectos",
      icon: "/assets/proyects-icon.svg",
      link: "/dashboard/proyects",
    },
    {
      name: "Participantes",
      icon: "/assets/participants-icon.svg",
      link: "/dashboard/participants",
    },
    {
      name: "Herramientas",
      icon: "/assets/tools-icon.svg",
      link: "/dashboard/tools",
    },
    {
      name: "Reuniones",
      icon: "/assets/meetings-icon.svg",
      link: "/dashboard/meetings-details",
    },
    {
      name: "Calendario",
      icon: "/assets/calendar-icon.svg",
      link: "/dashboard/calendar-details",
    },
    {
      name: "Tareas",
      icon: "/assets/tasks-icon.svg",
      link: "/dashboard/tasks-list",
    },
    {
      name: "Progreso",
      icon: "/assets/progress-icon.svg",
      link: "/dashboard/progress-details",
    },
    {
      name: "Documentación",
      icon: "/assets/docs-icon.svg",
      link: "/dashboard/docs-details",
    },
  ];

  const getFilterStyle = () => {
    return theme.text === "#e8e8e8" ? "invert(0)" : "invert(1)";
  };

  return (
    <div
      className='sidebar'
      style={{ color: theme.text, backgroundColor: theme.background }}
    >
      <div className='sidebar-nav-links'>
        {menuItems.map((item) => (
          <div
            key={item.name}
            className='sidebar-item'
            style={{ color: theme.subtitulos }}
          >
            <img
              alt={`${item.name} icon`}
              src={item.icon}
              className='sidebar-icon'
              style={{ filter: getFilterStyle() }}
            />
            <Link to={item.link} className='sidebar-link'>
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className='sidebar-footer'>
        <div className='sidebar-item'>
          <img
            alt='logout icon'
            src='/assets/logout-icon.svg'
            className='sidebar-icon-logout'
            style={{ filter: getFilterStyle() }}
          />
          <Link to='/' className='sidebar-link' style={{ color: theme.text }}>
            <span className='sidebar-text' style={{ color: theme.text }}>
              <SignOutButton>
                <button style={{ color: theme.subtitulos }}>
                  Cerrar Sesión
                </button>
              </SignOutButton>
            </span>
          </Link>
        </div>
        <img
          className='sidebar-theme-icon cursor-pointer'
          src={theme.subtitulos === "black" ? moon : sun}
          alt='change theme icon'
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

export default Sidebar;
