import { Outlet } from 'react-router-dom'
import './auth.css'

const Auth = () => {
  return <div className='auth-container'>

    <Outlet />    
  </div>
}

export default Auth
