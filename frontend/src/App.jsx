import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './views/error/Error';

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
import Meetings from './components/dashboard/meetings/Meetings';
import Calendar from './components/dashboard/calendar/Calendar';
import Tasks from './components/dashboard/tasks/Tasks';
import Progress from './components/dashboard/progress/Progress';
import Docs from './components/dashboard/docs/Docs';
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
    {
      path: '/dashboard',
      element: <Dashboard theme={theme} />,
      children: [
        { path: '/dashboard/home', element: <Main /> },
        { path: '/dashboard/proyects', element: <Proyects /> },
        { path: '/dashboard/proyect-details', element: <ProyectDetails /> },
        { path: '/dashboard/participants', element: <Participants /> },
        { path: '/dashboard/tools', element: <ToolsDetails /> },
        { path: '/dashboard/meetings', element: <Meetings /> },
        { path: '/dashboard/meetings-details', element: <MeetingsDetails /> },
        { path: '/dashboard/calendar', element: <Calendar /> },
        { path: '/dashboard/calendar-details', element: <CalendarDetails /> },
        { path: '/dashboard/tasks', element: <Tasks /> },
        { path: '/dashboard/add-task', element: <AddTask /> },
        { path: '/dashboard/task-details/:id', element: <TaskDetails /> },
        { path: '/dashboard/tasks-list', element: <TasksList /> },
        { path: '/dashboard/progress', element: <Progress /> },
        { path: '/dashboard/progress-details', element: <ProgressDetails /> },
        { path: '/dashboard/docs', element: <Docs /> },
        { path: '/dashboard/docs-details', element: <DocsDetails /> }
      ]
    }
  ]);

  return  <RouterProvider router={router} />;
}

export default App;
