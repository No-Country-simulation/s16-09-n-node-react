import { createBrowserRouter, RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import ErrorPage from "./views/error/Error";
import ProtectedRoutes from "./components/commons/Protected";

import Home from './views/home/Home';
import HomeMain from './components/home/homemain/HomeMain';
import About from './components/home/about/About';
import Contact from './components/home/contact/Contact';

import Auth from './views/auth/Auth';
import SignInPage from './components/auth/sign-in/SignIn';
import SignUpPage from './components/auth/sign-up/Signup';
import Terms from './components/auth/terms/Terms';
import Dashboard from './views/dashboard/Dashboard';
=======
>>>>>>> origin/main

import SignInPage from "./components/auth/sign-in/SignIn";
import SignUpPage from "./components/auth/sign-up/SignUp";
import Terms from "./components/auth/terms/Terms";
import Calendar from "./components/dashboard/calendar/Calendar";
import CalendarDetails from "./components/dashboard/calendar/CalendarDetails";
import Docs from "./components/dashboard/docs/Docs";
import DocsDetails from "./components/dashboard/docs/DocsDetails";
import Main from "./components/dashboard/main/Main";
// Importar las vistas de las rutas protegidas
import Meetings from "./components/dashboard/meetings/Meetings";
import MeetingsDetails from "./components/dashboard/meetings/MeetingsDetails";
import Participants from "./components/dashboard/participants/Participants";
import Progress from "./components/dashboard/progress/Progress";
import ProgressDetails from "./components/dashboard/progress/ProgressDetails";
import ProyectDetails from "./components/dashboard/proyect/ProyectDetails";
import AddEditProyect from "./components/dashboard/proyects/AddEditProyect";
import Proyects from "./components/dashboard/proyects/Proyects";
import AddTask from "./components/dashboard/tasks/AddTask";
import TaskDetails from "./components/dashboard/tasks/TaskDetails";
import Tasks from "./components/dashboard/tasks/Tasks";
import TasksList from "./components/dashboard/tasks/TasksList";
import ToolsDetails from "./components/dashboard/tools/ToolsDetails";
import About from "./components/home/about/About";
import Contact from "./components/home/contact/Contact";
import HomeMain from "./components/home/homemain/HomeMain";
import { useTheme } from "./context/themecontext";
import Auth from "./views/auth/Auth";
import Dashboard from "./views/dashboard/Dashboard";
import ErrorPage from "./views/error/Error";
import Home from "./views/home/Home";

function App() {
  const theme = useTheme();
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
          path: "/contact",
          element: <Contact />,
        },
      ],
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
          path: "/auth/sign-up",
          element: <SignUpPage />,
        },
        {
          path: "/auth/terms",
          element: <Terms />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard theme={theme} />,
      children: [
        { path: "/dashboard/home", element: <Main /> },
        { path: "/dashboard/proyects", element: <Proyects /> },
        { path: "/dashboard/proyect/add-proyect", element: <AddEditProyect /> },
        {
          path: "/dashboard/proyect/edit-proyect/:id",
          element: <AddEditProyect />,
        },
        { path: "/dashboard/proyect-details", element: <ProyectDetails /> },
        { path: "/dashboard/participants", element: <Participants /> },
        { path: "/dashboard/tools", element: <ToolsDetails /> },
        { path: "/dashboard/meetings", element: <Meetings /> },
        { path: "/dashboard/meetings-details", element: <MeetingsDetails /> },
        { path: "/dashboard/calendar", element: <Calendar /> },
        { path: "/dashboard/calendar-details", element: <CalendarDetails /> },
        { path: "/dashboard/tasks", element: <Tasks /> },
        { path: "/dashboard/add-task", element: <AddTask /> },
        { path: "/dashboard/task-details/:id", element: <TaskDetails /> },
        { path: "/dashboard/tasks-list", element: <TasksList /> },
        { path: "/dashboard/progress", element: <Progress /> },
        { path: "/dashboard/progress-details", element: <ProgressDetails /> },
        { path: "/dashboard/docs", element: <Docs /> },
        { path: "/dashboard/docs-details", element: <DocsDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
