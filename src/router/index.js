import { createRouter, createWebHistory } from 'vue-router'
import forms from '../views/Forms.vue'
import formLogin from '../views/FormLogin.vue' 
import formSignup from '../views/FormSignup.vue' 
 
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
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
