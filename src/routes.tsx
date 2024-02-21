import { createBrowserRouter } from 'react-router-dom';
import Home from './ui/pages/Home';
import ErrorPage from './ui/pages/Error';
import Cars from './ui/pages/Cars';
import Drivers from './ui/pages/Drivers';

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
