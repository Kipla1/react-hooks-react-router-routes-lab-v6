import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';

const routerConfig = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/movie/:id',
    element: <Movie />
  },
  {
    path: '/directors',
    element: <Directors />
  },
  {
    path: '/actors',
    element: <Actors />
  }
];

// Export both the config and the created router
export const routes = routerConfig;
export default createBrowserRouter(routerConfig);