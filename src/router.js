import { createRouter, createWebHistory } from 'vue-router'
import AppProducts from './components/AppProducts'
import AppItem from './components/AppItem'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/products', component: AppProducts, alias: '/'},
        {path: '/products/:id', component: AppItem }
    ]
})