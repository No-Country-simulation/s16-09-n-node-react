import { Helmet } from 'react-helmet'
import User from "../../components/dashboard/user/User"
import SearchNotifications from '../../components/dashboard/searchnotifications/SearchNotifications'
import Sidebar from '../../components/dashboard/sidebar/Sidebar'
import Main from '../../components/dashboard/main/Main'
import {useTheme} from '../../context/ThemeContext'
import styled from 'styled-components'

const SidebarContainer = styled.div`
width: 100dvw;
  max-width: 100dvw;
  min-height: 100dvh;
  display: grid;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: 16px;
  padding: 10px;
  grid-template-columns: auto auto;
color: ${({ theme }) => theme.text};
background-color: ${({ theme }) => theme.background};
`;

const Dashboard = (theme={theme}) => {



  return (
    <>
      <Helmet>
        <title>Proyect - Dashboard</title>
        <meta property="og:title" content="Proyect - Dashboard" />
      </Helmet>
      <SidebarContainer  theme={theme}>
        <User id='item1' />
        <SearchNotifications id='item2' />
        <Sidebar id='item3' />
        <Main id='item4' theme={theme} />
      </SidebarContainer>
    </>
  )
}

export default Dashboard
