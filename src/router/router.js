import Vue from 'vue'
import VueRouter from 'vue-router'

import Client from "@/views/client";

import Device from '../views/device'
import workOrder from "@/views/workOrder";
import Product from "@/views/product";
import Consumable from "@/views/consumable";


Vue.use(VueRouter)

const routes = [
  {
    path: '/client',
    name: 'client',
    component: Client
  },
  {
    path: '/device/:id',
    name: 'clientDevice',
    component: Device
  },
  {
    path: '/device',
    name: 'device',
    component: Device
  },
  {
    path: '/workOrder/:id',
    name: 'deviceWorkOrder',
    component: workOrder
  },
  {
    path: '/workOrder',
    name: 'workOrder',
    component: workOrder
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/consumable',
    name: 'consumable',
    component: Consumable
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
