import { createRouter, createWebHistory } from 'vue-router'
import Ciudades from '@/components/Ciudades.vue'
import Provincias from "@/components/Provincias.vue";
import Paises from "@/components/Paises.vue";

const routes = [
  { path: '/', component: Ciudades },
  { path: '/provincias', component: Provincias },
  { path: '/paises', component: Paises }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
