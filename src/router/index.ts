import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next);
//   next()
// })

// router.afterEach((to, from) => {
//   console.log(to, from);
//   window.scrollTo(0, 0)
// })

export default router
