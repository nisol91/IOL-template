import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pagina from '@/components/Pagina'
import Elenco from '@/components/Elenco'
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
			path: '/elenco',
			name: 'Elenco',
			component: Elenco
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