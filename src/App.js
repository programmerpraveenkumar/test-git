import logo from './logo.svg';
import './App.css';

import Home from './Home'
import {About} from './About'
import { createBrowserRouter,RouterProvider, useNavigate} from 'react-router';
const router = createBrowserRouter([
   {
    path: "/",
    element: <Home/>,
  },
    {
    path: "/home",
    element: <Home/>,
  }, {
    path: "/about",
    element: <About/>,
  }
]);

function App() {
  // const navigate = useNavigate()
  return (
   
       <RouterProvider router={router} />
  

  );
}


export default App;
