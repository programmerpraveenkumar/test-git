import './App.css';

import Home from './Home'
import {About} from './About'
import { createBrowserRouter,RouterProvider} from 'react-router';
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
  return (
   
       <RouterProvider router={router} />
  

  );
}


export default App;
