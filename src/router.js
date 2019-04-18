import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: to => '/index'
    },
    {
      path: '/index',
      name: 'index',
      alias: '/balabala',
      component: resolve => require(['@/routes/index'], resolve)
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/routes/about'], resolve),
      children: [
        {
          path: 'one',
          name: 'about-one',
          meta: {
            title: 'about one'
          },
          component: resolve => require(['@/routes/about-one'], resolve)
        },
        {
          path: 'two',
          name: 'about-two',
          component: resolve => require(['@/routes/about-two'], resolve)
        }
      ]
    },
    {
      path: '/other/:id',
      name: 'other',
      props: route => ({
        route: route
      }),
      component: resolve => require(['@/routes/other'], resolve)
    },
    // 匹配页面不存在的路由，显示404页面
    {
      path: '*',
      name: 'all',
      component: resolve => require(['@/routes/error'], resolve)
    },
  ]
})


export default router