import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";


import MainLayOut from './LayOut/MainLayOut';
import Home from './Components/Home';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/register';
import Dashboard from './Dashboard';
import ProjectDetails from './Components/ProjectDetails';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/details/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader:({params})=>fetch(`https://protfolio-of-nirob-ahmed-server.vercel.app/projects/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
