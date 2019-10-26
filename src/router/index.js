import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '@/views/Login'
import Home from '@/views/Home'
import Nurses from '@/views/Nurses'
import Caregivers from '@/views/Caregivers'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '*',
			redirect: '/home',
			component: Home,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/nurses',
			name: 'nurses',
			component: () => import('../views/Nurses.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/caregivers',
			name: 'caregivers',
			component: () => import('../views/Caregivers.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('../views/Projects.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/teams',
			name: 'teams',
			component: () => import('../views/Teams.vue'),
			meta: {
				requiresAuth: true
			}
		}
	]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser
    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router
