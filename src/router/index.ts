import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index'
Vue.use(VueRouter)

const routes:Array<any> = [
	{
		path:'/',name:'index',component:Index
	},
	{
		path:'/login',name:'login',component:() => import('@/pages/Login')
	}
]

const router:VueRouter = new VueRouter({
  routes
})

export default router
