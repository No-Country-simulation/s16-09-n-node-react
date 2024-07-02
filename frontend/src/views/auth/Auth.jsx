import { Outlet } from 'react-router-dom'
import './auth.css'

const Auth = () => {
  return <div className='auth-container'>
    Auth layout + forms de login o registro 
    <Outlet />    
  </div>
}

export default Auth
