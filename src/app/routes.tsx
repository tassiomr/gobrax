import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ui/pages/Error';
import Cars from '../ui/pages/Cars';
import Drivers from '../ui/pages/Drivers';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Drivers />,
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
