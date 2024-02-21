import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import Cars from './pages/Cars';
import Drivers from './pages/Drivers';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cars',
    element: <Cars />,
  },
  {
    path: '/drivers',
    element: <Drivers />,
  },
]);

export default routes;
