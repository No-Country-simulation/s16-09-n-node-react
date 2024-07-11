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

import logo from './assets/logo.png'

function App() {
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





    <RouterProvider router={router} />
      
<SignedIn><UserButton /></SignedIn>
      <SignedOut><SignInButton /></SignedOut>
      
  </>
  
  
  )
}

export default App
