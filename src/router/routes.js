
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('pages/home'),
  },
  {
    path: '/api',
    name: 'api',
    component: () => import('pages/api'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/404')
  }
]

export default routes
