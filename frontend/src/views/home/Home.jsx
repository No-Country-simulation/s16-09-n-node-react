import './home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-header">
        <img src="/assets/logo-brand.svg" alt="Proyect Brand" className='home-brand' />
        <div className="home-auth-container">
          <NavLink to='/auth/sign-in' className='home-navlinks'>Iniciar Sesión</NavLink>
          <NavLink to='/auth/sign-up' className='home-navlinks'>Registrarse</NavLink>
        </div>
      </div>
      <div className="home-main">
        <div className="home-container1">
          <img src="/assets/rocket-landing.svg" alt="rocket" className='home-rocket-image' />
          <div className="home-text-container">
            <span className='home-text'>
              Convierte la gestión de tus proyectos en una experiencia
            </span>
            <span className='home-text-green'>
              rápida, eficiente y colaborativa
            </span>
            <NavLink className='home-cta-link'>Conoce más</NavLink>
          </div>
        </div>
        <div className="home-hero-images">
          <img src="/assets/device-mac.svg" alt="mac device image" className='home-mac-device-image' />
          <img src="/assets/device-phone.svg" alt="phone device image" className='home-device-image' />
        </div>
      </div>
      <div className="home-flint"></div>
    </div>
  )
}

export default Home
