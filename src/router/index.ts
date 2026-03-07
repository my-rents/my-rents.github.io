import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Stratex | Expert Consulting That Drives Real Growth',
    },
  },
  {
    path: '/terms-of-service',
    name: 'terms',
    component: () => import('@/views/LegalView.vue'),
    props: { pageKey: 'terms' },
    meta: {
      title: 'Terms of Service | Stratex',
    },
  },
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: () => import('@/views/LegalView.vue'),
    props: { pageKey: 'privacy' },
    meta: {
      title: 'Privacy Policy | Stratex',
    },
  },
  {
    path: '/eula',
    name: 'eula',
    component: () => import('@/views/LegalView.vue'),
    props: { pageKey: 'eula' },
    meta: {
      title: 'EULA | Stratex',
    },
  },
  {
    path: '/data-deletion',
    name: 'dataDeletion',
    component: () => import('@/views/LegalView.vue'),
    props: { pageKey: 'dataDeletion' },
    meta: {
      title: 'Data Deletion | Stratex',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return new Promise((resolve) => {
        window.setTimeout(() => {
          resolve({
            el: to.hash,
            top: 16,
            behavior: 'smooth',
          })
        }, 180)
      })
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.afterEach((to) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title
  }
})

export default router
