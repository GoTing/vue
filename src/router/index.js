import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import nearby from '@/components/nearby'
import order from '@/components/order'
import my from '@/components/my'
import Index from '@/components/index'

import collect from '@/components/collect'
import setUp from '@/components/set-up'
import setMy from '@/components/set-my'
import search from '@/components/search'
import adress from '@/components/adress'



Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: '/',
			component: Index,
			redirect: '/home',
			meta: {
				title: '首页'
			},
			children: [
				{
					path: '/home',
					name: 'home',
					component: home,
					meta: {
						title: '首页'
					},

				},
				{
					path: '/nearby',
					name: 'nearby',
					component: nearby,
					meta: {
						title: '附近'
					}
				},
				{
					path: '/order',
					name: 'order',
					component: order,
					meta: {
						title: '订单'
					}
				},
				{
					path: '/my',
					name: 'my',
					component: my,
					meta: {
						title: '我的'
					}
				}
			]
		},
		{
			path: '/collect',
			name: 'collect',
			component: collect,
			meta: {
				title: '收藏'
			}
		},
    {
      path: '/setup',
      name: 'setup',
      component: setUp,
      meta: {
        title: '设置'
      }
    },
    {
	  path:'/setmy',
      name:'setmy',
      component:setMy,
      meta:{
	    title:'个人信息修改'
      }
    }
    ,{
	  path:'/search',
      name:'search',
      component:search,
      meta:{
        title:'搜索'
    }
    },
    {
      path:'/adress',
      name:'adress',
      component:adress,
      meta:{
        title:'地区选择'
      }
	}
	]
})
