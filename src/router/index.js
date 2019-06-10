import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/web_admin/downloadPage',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect:'/web_admin/downloadPage'
    }
  ]
})
