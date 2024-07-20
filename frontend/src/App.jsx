import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './views/error/Error';
import ProtectedRoutes from './components/commons/Protected';

import Home from './views/home/Home';
import HomeMain from './components/home/homemain/HomeMain';
import About from './components/home/about/About';
import Contact from './components/home/contact/Contact';

import Auth from './views/auth/Auth';
import SignInPage from './components/auth/sign-in/SignIn';
import SignUpPage from './components/auth/sign-up/Signup';
import Terms from './components/auth/terms/Terms';
import Dashboard from './views/dashboard/Dashboard';

// Importar las vistas de las rutas protegidas
import Project from './components/dashboard/proyect/Proyect';
import Tools from './components/dashboard/tools/Tools';
import Meetings from './components/dashboard/meetings/Meetings';
import Calendar from './components/dashboard/calendar/Calendar';
import Tasks from './components/dashboard/tasks/Tasks';
import Progress from './components/dashboard/progress/Progress';
import Docs from './components/dashboard/docs/Docs';
import Participantes from './components/dashboard/participantes/participantes';
import {useTheme} from './context/ThemeContext'



function App() {
  const theme = useTheme();
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
          path: '/auth/terms',
          element: <Terms />
        }
      ]
    },
 
   
 
            { path: 'dashboard/home', element: <HomeMain /> },
            { path: 'dashboard/projects', element: <Project /> },
            { path: 'dashboard/participantes', element: <Participantes /> },
            { path: 'tools', element: <Tools /> },
            { path: 'meetings', element: <Meetings /> },
            { path: 'calendar', element: <Calendar /> },
            { path: 'tasks', element: <Tasks /> },
            { path: 'progress', element: <Progress /> },
            { path: 'docs', element: <Docs /> },
  
   ,
    {
      path: '/dashboard',
      element: <Dashboard theme={theme} />
    }
  ]);

  return  <RouterProvider router={router} />;
}

export default App;
