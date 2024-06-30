import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/login/Register.vue')
    },
    {
      path: '/findUser',
      name: 'findUser',
      component: () => import('../views/login/FindUser.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/Payment/index.vue')
    }
  ]
})

// 判断用户是否登录的函数（示例中简单返回false表示未登录）
function isUserLoggedIn() {
  return true
}
 
// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !isUserLoggedIn()) {
    next('/login') // 如果不是登录页且用户未登录，重定向到登录页
  } else {
    next() // 继续正常的路由
  }
})

export default router
