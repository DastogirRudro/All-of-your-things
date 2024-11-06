import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root.jsx';
import Home from './maincomponent/Home.jsx';
import Statistics from './maincomponent/Statistics.jsx';
import Dashboard from './maincomponent/Dashboard.jsx';
import Gadgetcards from './Gadgetcards.jsx';
import Details from './maincomponent/Details.jsx';
import Errorpage from './Errorpage.jsx';
import { toast } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children: [
     {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('../public/category.json'),
      children:[
        {
          path: "/",
          element: <Gadgetcards></Gadgetcards>,
          loader: () => fetch('../public/gadgetheaven.json')
        },
        {
          path: "/categories/:category",
          element: <Gadgetcards></Gadgetcards>,
          loader: () => fetch('../public/gadgetheaven.json')
        },
      ],
     },
     {
      path:"/details/:id",
      element:<Details></Details>,
      loader: () => fetch('../public/gadgetheaven.json'),
     }, 
     {
      path: "/statistics",
      element: <Statistics></Statistics>,
     },
     {
      path: "/dashboard",
      element: <Dashboard></Dashboard>
     }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
