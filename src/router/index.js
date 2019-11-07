import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '@/views/Login'
import Home from '@/views/Home'

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
			path: '/professionals/applicants',
			name: 'applicants',
			component: () => import('../views/Applicants.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/professionals/:profession',
			name: 'professionals',
			component: () => import('../views/Professionals.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/clients',
			name: 'clients',
			component: () => import('../views/Clients.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/client/:id/details',
			name: 'client_details',
			component: () => import('../views/ClientFacesheet.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/client/:id/visits',
			name: 'client_visits',
			component: () => import('../views/ClientVisits.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/client/:id/hids',
			name: 'client_hids',
			component: () => import('../views/ClientHids.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/client/:id/contract',
			name: 'client_contract',
			component: () => import('../views/ClientContract.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/client/:id/requests',
			name: 'clients requests',
			component: () => import('../views/ClientsRequests.vue'),
			meta: {
				requiresAuth: true
			}
		},
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
