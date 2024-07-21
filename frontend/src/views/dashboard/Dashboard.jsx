import './dashboard.css'
import { Helmet } from 'react-helmet'
import User from "../../components/dashboard/user/User"
import SearchNotifications from '../../components/dashboard/searchnotifications/SearchNotifications'
import Sidebar from '../../components/dashboard/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext';

const Dashboard = () => {
  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <title>Proyect - Dashboard</title>
        <meta property="og:title" content="Proyect - Dashboard" />
      </Helmet>
      <div className='dashboard-container' style={{ color: theme.text, backgroundColor: theme.backgroundSecondary }}>
        <User />
        <SearchNotifications />
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
