
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Room from './components/Room/Room';
import Roombook from './components/Roombook/Roombook';
import FourOfFour from './Sharedfolder/FourOfFour/FourOfFour';
import Login from './Sharedfolder/Login/Login';
import Signup from './Sharedfolder/Signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/details')
        },
        {
          path: '/room',
          element: <Room></Room>,
          loader: () => fetch(`http://localhost:5000/details`)
        },
        {
          path: '/details',
          element: <Details></Details>,
          loader: () => fetch('http://localhost:5000/details')
        },
        {
          path: '/detail/:id',
          element: <Detail></Detail>,
          loader: async ({ params }) => fetch(`http://localhost:5000/detail/${params.id}`)
        },
        {
          path: '/book/:id',
          element: <Roombook></Roombook>,
          loader: async ({ params }) => fetch(`http://localhost:5000/detail/${params.id}`)
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
