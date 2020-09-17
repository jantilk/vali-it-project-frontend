import Vue from 'vue'
import VueRouter from 'vue-router'

import CreateClient from "@/views/client";
import Device from '../views/device'
import workOrder from "@/views/workOrder";

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
  },
  {
    path: '/workOrder',
    name: 'workOrder',
    component: workOrder
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
