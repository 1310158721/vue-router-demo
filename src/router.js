import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const router = new Router({
	routes: [
            {
            	path: '/',
            	name: '/',
            	redirect: '/total'
            },
            {
            	path: '/total',
            	name: 'total',
            	component: resolve => require(['@/components/total'], resolve)
            },
            {
                path: '/router1',
                name: 'router1',
                component: resolve => require(['@/components/router1'], resolve)
            },
            {
                path: '/router2',
                name: 'router2',
                component: resolve => require(['@/components/router2'], resolve)
            },
            {
                path: '/router3',
                name: 'router3',
                component: resolve => require(['@/components/router3'], resolve)
            }
	]
})

export default router