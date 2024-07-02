import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  
  return true ?   
    <Outlet />
    :
    <Navigate to='/login' />
}
