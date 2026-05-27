import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('@/views/PricingView.vue'),
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import('@/views/ComparisonView.vue'),
  },
  {
    path: '/how-to-start',
    name: 'howToStart',
    component: () => import('@/views/ProcessView.vue'),
  },
  {
    path: '/forum',
    name: 'forum',
    component: () => import('@/views/ForumView.vue'),
  },
  {
    path: '/portal',
    name: 'portal',
    component: () => import('@/views/PortalView.vue'),
  },
  {
    path: '/terms-of-service',
    name: 'terms',
    component: () => import('@/views/LegalView.vue'),
    props: { pageKey: 'terms' },
  },
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: () => import('@/views/LegalView.vue'),
    props: { pageKey: 'privacy' },
  },
  {
    path: '/eula',
    name: 'eula',
    component: () => import('@/views/LegalView.vue'),
    props: { pageKey: 'eula' },
  },
  {
    path: '/data-deletion',
    name: 'dataDeletion',
    component: () => import('@/views/LegalView.vue'),
    props: { pageKey: 'dataDeletion' },
  },
  {
    path: '/unsubscribe',
    name: 'unsubscribe',
    component: () => import('@/views/UnsubscribeView.vue'),
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
            top: 80, // match header height
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

export default router
