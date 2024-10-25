/*
 * @Description:
 * @Author: 欧阳承珺
 * @LastEditors: 欧阳承珺
 * @Date: 2024-10-25 10:38:30
 * @LastEditTime: 2024-10-25 14:25:04
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const modules = import.meta.glob('../views/*.vue')

const routes = [
  {
    path: '/',
    redirect: '/website',
  },
]

for (const path in modules) {
  const name = path.match(/\.\/views\/(.*)\.vue$/)[1]

  routes.push({
    path: '/' + name,
    name: name,
    component: modules[path],
  })
}
console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
