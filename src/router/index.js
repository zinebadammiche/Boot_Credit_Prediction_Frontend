import { createRouter, createWebHistory } from 'vue-router'
import forms from '../views/Forms.vue'
 

const routes = [
   
   {
    path: '/forms',
    component: forms
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
