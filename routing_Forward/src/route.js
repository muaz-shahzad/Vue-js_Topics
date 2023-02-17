import { createRouter,createWebHistory } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'




const routes=[
    {
        name: Home,
        path: '/',
        component: Home
    },
    {
        name: About,
        path: '/About',
        component: About
    },
    {
        name: Login,
        path: '/Login',
        component: Login
    },
    {
        name: Profile,
        path: '/Profile/:name',
        component: Profile
    },
    {
        name: Home,
        path: '/:pathMatch(.*)*',
        component: Home
    },

];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router