import Vue from 'vue'
import VueRouter from 'vue-router'

import CreateClient from "@/views/client";
import Device from '../views/device'

Vue.use(VueRouter)

const routes = [
  {
    path: '/client',
    name: 'client',
    component: CreateClient
  },
  {
    path: '/device',
    name: 'device',
    component: Device
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
