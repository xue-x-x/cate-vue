import Vue from 'vue'
import Router from 'vue-router'
import 'lib-flexible/flexible'

import city from '@/page/city/city'
import home from '@/page/home'
import login from '@/page/login'
import menu from '@/page/menu'
import market from '@/page/market'
import marketList from '@/page/marketList'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'login', component: login, meta:{title:'登录'}},
    {path: '/city', name: 'city', component: city, meta:{title:'城市选择'}},
    {path: '/login', name: 'login', component: login, meta:{title:'登录'}},
    {path: '/home', name: 'home', component: home, meta:{title:'精选-首页'}},
    {path: '/menu', name: 'menu', component: menu, meta:{title:'菜谱分类'}},
    {path: '/market', name: 'market', component: market, meta:{title:'集市'}},
    {path: '/marketList/:name', name: 'marketList', component: marketList, meta:{title:'集市商品'}},
  ]
})

// npm i eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-html -D
