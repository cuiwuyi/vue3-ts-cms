import { createRouter, createWebHashHistory } from 'vue-router'
import { localCache } from '../utils/cache.ts'
import { LOGIN_TOKEN } from '../global/constants.ts'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-fount/NotFount.vue')
    }
  ]
})

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === './main' && !token) {
    return '/login'
  }
})

export default router
