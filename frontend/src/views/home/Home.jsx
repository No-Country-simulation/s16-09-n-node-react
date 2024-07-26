import './home.css';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Importar los estilos de AOS
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='home-container'>
      <div className="home-header">
        <img src="/assets/logo-brand.svg" alt="Proyect Brand" className='home-brand' data-aos="fade-right" data-aos-delay="300" />
        <div className="home-auth-container">
          <NavLink to='/auth/sign-in' className='home-navlinks' data-aos="fade-right" data-aos-delay="300">Iniciar Sesión</NavLink>
          <NavLink to='/auth/sign-up' className='home-navlinks' data-aos="fade-right" data-aos-delay="300">Registrarse</NavLink>
        </div>
      </div>
      <div className="home-main">
        <div className="home-container1">
          <img src="/assets/rocket-landing.svg" alt="rocket" className='home-rocket-image' />
          <div className="home-text-container">
            <span className='home-text' data-aos="fade-left" data-aos-delay="300">
              Convierte la gestión de tus proyectos en una experiencia
            </span>
            <span className='home-text-green' data-aos="fade-left" data-aos-delay="300">
              rápida, eficiente y colaborativa
            </span>
            <NavLink to='/more-info' className='home-cta-link' data-aos="fade-down" data-aos-delay="300">Conoce más</NavLink>
          </div>
        </div>
        <div className="home-hero-images">
          <img src="/assets/device-mac.svg" alt="mac device image" className='home-mac-device-image' data-aos="fade-left" data-aos-delay="300" />
          <img src="/assets/device-phone.svg" alt="phone device image" className='home-device-image' data-aos="fade-right" data-aos-delay="300" />
        </div>
      </div>
      <div className="home-flint"></div>
    </div>
  );
}

export default Home;
