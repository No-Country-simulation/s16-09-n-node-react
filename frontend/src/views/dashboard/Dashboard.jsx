import './dashboard.css'
import { Helmet } from 'react-helmet'
import User from "../../components/dashboard/user/User"
import SearchNotifications from '../../components/dashboard/searchnotifications/SearchNotifications'
import Sidebar from '../../components/dashboard/sidebar/Sidebar'
import Main from '../../components/dashboard/main/Main'

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Proyect - Dashboard</title>
        <meta property="og:title" content="Proyect - Dashboard" />
      </Helmet>
      <div className='dashboard-container'>
        <User id='item1' />
        <SearchNotifications id='item2' />
        <Sidebar id='item3' />
        <Main id='item4' />
      </div>
    </>
  )
}

export default Dashboard
