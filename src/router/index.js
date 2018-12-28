import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from '../pages/Home'
import User from '../pages/User'
import NotFount from '../pages/NotFount/E404'

Vue.use(Router);

const routes = [
    { path: '/', redirect: {path:'/home',query:{id:'12'}} },
    { path: '/home', component: Home },
    { path: '/user', component: User },
    { path: '*', component: NotFount },
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;