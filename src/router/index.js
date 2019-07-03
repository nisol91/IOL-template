import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pagina from '@/components/Pagina'
import Elenco from '@/components/Elenco'
import HomeChild from '@/components/HomeChild'

import ElementoSingolo from '@/components/ElementoSingolo'





Vue.use(Router)

let router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'Home',
			component: Home,
			children: [
				{
					path: '',
					name: '',
					redirect: {
						name: 'HomeChild'
					}
				},
				{
					path: '/home',
					name: 'HomeChild',
					components: {
						inside_menu: HomeChild
					}
				},
				{
					path: '/pagina',
					name: 'Pagina',
					components: {
						inside_menu: Pagina
					}
				},
				{
					path: '/elenco',
					name: 'Elenco',
					components: {
						inside_menu: Elenco
					}
				},
			]
		},
		{
			path: '/elenco_2',
			name: 'Elenco',
			components: {
				default: Elenco,
			}
		},
		{
			path: '/elementosingolo/:elementoId',
			name: 'ElementoSingolo',
			component: ElementoSingolo,
			props: true,
		},
	]
})


export default router