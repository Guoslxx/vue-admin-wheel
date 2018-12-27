import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from '../pages/Home'
import User from '../pages/User'

Vue.use(Router);

const routes = [
    { path: '/', redirect: {path:'/home',query:{id:'12'}} },
    { path: '/home', component: Home },
    { path: '/user', component: User },
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;