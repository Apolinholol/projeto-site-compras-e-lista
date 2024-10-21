import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Produtos from '@/views/Produtos.vue'
import Carrinho from '@/views/Carrinho.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'produtos',
    component: Produtos
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: Carrinho
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
