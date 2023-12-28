export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'layout_home',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/Home.vue')
      }
    ]
  },
  {
    path: '/bookmarks',
    name: 'layout_bookmarks',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'bookmarks',
        component: () => import('@/pages/Bookmarks.vue')
      }
    ]
  },
  {
    path: '/dev',
    name: 'layout_dev',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'dev',
        component: () => import('@/pages/Dev.vue')
      }
    ]
  },
  {
    path: '/404',
    name: 'layout_not_found',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: '404',
        component: () => import('@/pages/NotFound.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
