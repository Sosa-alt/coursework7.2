import Vue from 'vue'
import VueRouter from 'vue-router'
import Lessons from "../views/Lessons";
import ShoppingCart from "../views/ShoppingCart";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lessons',
    component: Lessons
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
