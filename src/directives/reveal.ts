import type { Directive } from 'vue'

type RevealElement = HTMLElement & {
  __revealObserver?: IntersectionObserver
}

export const revealDirective: Directive<RevealElement, number | undefined> = {
  mounted(element, binding) {
    const prefersReducedMotion =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false

    element.style.setProperty('--reveal-delay', `${binding.value ?? 0}ms`)

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-visible')
      return
    }

    element.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0]

        if (firstEntry?.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -72px',
      },
    )

    observer.observe(element)
    element.__revealObserver = observer
  },
  unmounted(element) {
    element.__revealObserver?.disconnect()
  },
}
