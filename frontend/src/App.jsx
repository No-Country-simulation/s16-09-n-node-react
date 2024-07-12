import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './views/error/Error';
import ProtectedRoutes from './components/commons/Protected';

import Home from './views/home/Home';
import HomeMain from './components/home/homemain/HomeMain';
import About from './components/home/about/About';
import Contact from './components/home/contact/Contact'

import Auth from './views/auth/Auth';
import SignInPage from './components/auth/sign-in/SignIn';
import SignUpPage  from './components/auth/sign-up/Signup';
import Terms from './components/auth/terms/Terms';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, SignIn, SignUp } from "@clerk/clerk-react";
import { useUser } from '@clerk/clerk-react';
import logo from './assets/logo.png'
import iconoRueda from './assets/iconoRueda.svg'

function App() {


  const { isSignedIn, user, isLoaded } = useUser();

  
  if (!isLoaded) {
    // agregar loading o spinner
    return null;
  }
  console.log (user, "user")

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomeMain />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }, 
    {
      path: '/auth',
      element: <Auth />,
      children: [
        {
          path: '/auth/sign-in',
          element: <SignInPage />
        },
        {
          path: '/auth/sign-up',
          element: <SignUpPage />
        }, 
        {
          path: '/auth/term',
          element: <Terms />
        }
      ]
    },
    {
      element: <ProtectedRoutes />,
      children: [
        /*
        RUTAS PROTEGIDAS
        */
      ]
    }
  ])



  return (<> 



<SignedIn>
  <div className=' w-100 flex flex-row p-4 border border-black rounded-[5px]'>
  <UserButton shimmer="true" /> 
  <div>
  <p className='mx-1'> {user.firstName} {user.lastName} </p>
  <p>rol</p>
  </div>
<img className='w-6' src={iconoRueda} alt="" />

</div></SignedIn>
      <SignedOut><SignInButton /></SignedOut>


    <RouterProvider router={router} />
      

      
  </>
  
  
  )
}

export default App
