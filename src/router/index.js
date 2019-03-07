import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Admin from '@/components/Admin';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Login from '@/components/Login';
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    }
  ]
})
