
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'contato', component: () => import('pages/contato.vue') },
      { path: 'sobre', component: () => import('pages/sobre.vue') },
      { path: 'galeria', component: () => import('pages/galeria.vue') },
      { path: 'portfolio', component: () => import('pages/portfolio.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
