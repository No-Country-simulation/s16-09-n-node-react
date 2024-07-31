import "./dashboard.css";

import { useTheme } from "@/context/themecontext";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

import SearchNotifications from "../../components/dashboard/searchnotifications/SearchNotifications";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import User from "../../components/dashboard/user/User";

import "aos/dist/aos.css"; 

const Dashboard = () => {



  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <title>Proyect - Dashboard</title>
        <meta property='og:title' content='Proyect - Dashboard' />
      </Helmet>
      <div
        className='dashboard-container'
        style={{
          color: theme.text,
          backgroundColor: theme.backgroundSecondary,
        }}
      >
        <div >
          <User />
        </div>
        <div >
          <SearchNotifications />
        </div>
          <Sidebar />

          <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
