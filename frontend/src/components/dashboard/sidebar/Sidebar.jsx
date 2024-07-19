import React from 'react';
import { Link } from 'react-router-dom';
import { SignOutButton } from '@clerk/clerk-react';
import { useTheme } from '../../../context/ThemeContext'; 
import styled from 'styled-components';
import sun from './sun-icon.svg';
import moon from './moon-icon.svg';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 890px;
  gap: 20px;
  width: 250px;
  border-radius: 15px;
  margin: auto;
  margin-top: 0;
  width: 300px;
  font-size: x-large;
    background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const NavLinkItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const LinkText = styled.span`
padding: 5%;
`;

const LogoutThemeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;

const ThemeIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <SidebarContainer theme={theme}>
      <NavLinks>
        <NavLinkItem theme={theme}>
          <Icon alt="home icon" src="/assets/home-icon.svg" />
          <Link to="/" className="sidebar-link">
            <LinkText>Home</LinkText>
          </Link>
        </NavLinkItem>
        <NavLinkItem theme={theme}>
          <Icon alt="projects icon" src="/assets/proyects-icon.svg" />
          <Link to="/projects" className="sidebar-link">
            <LinkText>Proyectos</LinkText>
          </Link>
        </NavLinkItem>
        <NavLinkItem theme={theme}>
          <Icon alt="participants icon" src="/assets/participants-icon.svg" />
          <Link to="/participantes" className="sidebar-link">
            <LinkText>Participantes</LinkText>
          </Link>
        </NavLinkItem>
        <NavLinkItem theme={theme}>
          <Icon alt="tools icon" src="/assets/tools-icon.svg" />
          <Link to="/tools" className="sidebar-link">
            <LinkText>Herramientas</LinkText>
          </Link>
        </NavLinkItem>
        <NavLinkItem theme={theme}>
          <Icon alt="meetings icon" src="/assets/meetings-icon.svg" />
          <Link to="/meetings" className="sidebar-link">
            <LinkText>Reuniones</LinkText>
          </Link>
        </NavLinkItem>
        <NavLinkItem theme={theme}>
          <Icon alt="calendar icon" src="/assets/calendar-icon.svg" />
          <Link to="/calendar" className="sidebar-link">
            <LinkText>Calendario</LinkText>
          </Link>
        </NavLinkItem>
        <NavLinkItem theme={theme}>
          <Icon alt="tasks icon" src="/assets/tasks-icon.svg" />
          <Link to="/tasks" className="sidebar-link">
            <LinkText>Tareas</LinkText>
          </Link>
        </NavLinkItem>
        <NavLinkItem theme={theme}>
          <Icon alt="progress icon" src="/assets/progress-icon.svg" />
          <Link to="/progress" className="sidebar-link">
            <LinkText>Progreso</LinkText>
          </Link>
        </NavLinkItem>
        <NavLinkItem theme={theme}>
          <Icon alt="docs icon" src="/assets/docs-icon.svg" />
          <Link to="/docs" className="sidebar-link">
            <LinkText>Documentación</LinkText>
          </Link>
        </NavLinkItem>
      </NavLinks>
      <LogoutThemeContainer>
        <LogoutButton theme={theme}>
          <Icon alt="logout icon" src="/assets/logout-icon.svg" />
          <SignOutButton />
        </LogoutButton>
        <ThemeIcon
          src={theme === 'light' ? sun : moon}
          alt="change theme icon"
          onClick={toggleTheme}
        />
      </LogoutThemeContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
