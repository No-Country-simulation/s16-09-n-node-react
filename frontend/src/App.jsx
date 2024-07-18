import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./views/error/Error";
import ProtectedRoutes from "./components/commons/Protected";

<<<<<<< HEAD
import Home from "./views/home/Home";
import HomeMain from "./components/home/homemain/HomeMain";
import About from "./components/home/about/About";
import Contact from "./components/home/contact/Contact";

import Auth from "./views/auth/Auth";
import SignInPage from "./components/auth/sign-in/SignIn";
import SignUpPage from "./components/auth/sign-up/Signup";
import Terms from "./components/auth/terms/Terms";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import Participantes from "./components/participantes/participantes";

import logo from "./assets/logo.png";
=======
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

>>>>>>> origin/dev

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomeMain />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
<<<<<<< HEAD
          path: "/contact",
          element: <Contact />,
        },
      ],
=======
          path: '/contact',
          element: <Contact />
        }
        
      ]
>>>>>>> origin/dev
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "/auth/sign-in",
          element: <SignInPage />,
        },
        {
<<<<<<< HEAD
          path: "/auth/sign-up",
          element: <SignUpPage />,
        },
        {
          path: "/auth/term",
          element: <Terms />,
        },
      ],
=======
          path: '/auth/sign-up',
          element: <SignUpPage />
        },
        {
          path: '/auth/terms',
          element: <Terms />
        }
      ]
>>>>>>> origin/dev
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
<<<<<<< HEAD
      element: <ProtectedRoutes />,
      children: [
        /*
        RUTAS PROTEGIDAS
        */
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <div>
        <h1>Proyecto de Participantes</h1>
        <Participantes />
      </div>
    </>
  );
=======
      path: '/dashboard',
      element: <Dashboard />
    }
  ]);

  return <RouterProvider router={router} />;
>>>>>>> origin/dev
}

export default App;
