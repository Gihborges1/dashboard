import Vue from 'vue'
import VueRouter from 'vue-router'
import FuncionariosView from '../views/FuncionariosView.vue'
import GraficosView from '../views/GraficosView.vue'
import NumericosView from '../views/NumericosView.vue'
import AvaliacaoView from '../views/AvaliacaoView.vue'
import AdminView from '../views/AdminView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/funcionarios',
    name: 'Funcionários',
    component: FuncionariosView,
    meta: {title: "Funcionários"}
  },
  {
    path: '/dadosGraficos',
    name: 'Dados Gráficos',
    component: GraficosView,
    meta: {title: "Dados Gráficos"}
  },
  {
    path: '/dadosNumericos',
    name: 'Dados Numéricos',
    component: NumericosView,
    meta: {title: "Dados Numéricos"}
  },
  {
    path: '/',
    name: 'Avaliação',
    component: AvaliacaoView,
    meta: {title: "Avaliação"}
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
    meta: {title: "Admin"}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
