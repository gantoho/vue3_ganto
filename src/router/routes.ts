export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'layoutHome',
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
    name: 'layoutBookmarks',
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
    name: 'layoutDev',
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
    name: 'layoutNotFound',
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
    name: 'redirectNotFound',
    redirect: '/404'
  }
]
