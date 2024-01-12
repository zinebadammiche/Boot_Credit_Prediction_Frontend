import { createRouter, createWebHistory } from 'vue-router'
import forms from '../views/Forms.vue'
import formLogin from '../views/FormLogin.vue' 
import formSignup from '../views/FormSignup.vue' 
import alert from '../views/AlertT.vue' 
const routes = [
   
   {
    path: '/forms',
    component: forms
    
  },
  {
    path: '/login',
    component: formLogin
    
  }, {
    path: '/signup',
    component:formSignup
    
  }, {
    path: '/history',
    component:forms
    
  }
  , {
    path: '/alert',
    component:alert
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
