import './home.css'
import Navbar from "../../components/commons/navbar/Navbar";
import Footer from "../../components/commons/footer/Footer";
import { Outlet } from 'react-router-dom';

const Home = () => {
  return <div className='home-container'>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
}

export default Home
