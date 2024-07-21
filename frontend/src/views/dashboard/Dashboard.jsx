import './dashboard.css'
import { Helmet } from 'react-helmet'
import User from "../../components/dashboard/user/User"
import SearchNotifications from '../../components/dashboard/searchnotifications/SearchNotifications'
import Sidebar from '../../components/dashboard/sidebar/Sidebar'
import Main from '../../components/dashboard/main/Main'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Proyect - Dashboard</title>
        <meta property="og:title" content="Proyect - Dashboard" />
      </Helmet>
      <div className='dashboard-container'>
        <User />
        <SearchNotifications />
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard
