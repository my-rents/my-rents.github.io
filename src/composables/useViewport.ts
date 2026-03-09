import { computed, onMounted, onUnmounted, ref } from 'vue'

export function useViewport() {
  const width = ref(typeof window === 'undefined' ? 1280 : window.innerWidth)

  const updateWidth = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return {
    width,
    isTablet: computed(() => width.value < 1024),
    isMobile: computed(() => width.value < 768),
  }
}
