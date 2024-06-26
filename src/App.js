import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Room from './components/Room/Room';
import Roombook from './components/Roombook/Roombook';
import PrivateRouter from './Routers/PrivateRouter';
import FourOfFour from './Routers/FourOfFour';
import Login from './Sharedfolder/Login/Login';
import Signup from './Sharedfolder/Signup/Signup';
import ErrorBoundary from './Routers/ErrorBoundary';

function App() {
  // let f='Network Error';
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement:<ErrorBoundary/>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () =>fetch('https://hotel-night-server.vercel.app/details'),
         
        },
        {
          path: '/room',
          element: <Room></Room>,
          loader: () => fetch(`https://hotel-night-server.vercel.app/details`),
         
        },
        {
          path: '/details',
          element: <Details></Details>,
          loader: () => fetch('https://hotel-night-server.vercel.app/details'),
         
        },
        {
          path: '/detail/:id',
          element: <PrivateRouter><Detail></Detail></PrivateRouter>,
          loader: async ({ params }) => fetch(`https://hotel-night-server.vercel.app/details/${params.id}`),
         
        },
        {
          path: '/book/:id',
          element: <PrivateRouter><Roombook></Roombook></PrivateRouter>,
          loader: async ({ params }) => fetch(`https://hotel-night-server.vercel.app/details/${params.id}`),
         
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    {
      path: '/*',
      element: <FourOfFour></FourOfFour>
    }

  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
};

export default App;
