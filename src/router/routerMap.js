import Home from '../pages/home';
import Detail from '../pages/detail';
import Login from '../pages/login';

const router = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail',
    // component: () => import('../pages/detail')
    component: Detail
  },
]

export default router