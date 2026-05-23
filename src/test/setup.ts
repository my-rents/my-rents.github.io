import { beforeEach, vi } from 'vitest'

const store = new Map<string, string>()

const localStorageMock: Storage = {
  get length(): number {
    return store.size
  },
  key(index: number): string | null {
    return [...store.keys()][index] ?? null
  },
  getItem(key: string): string | null {
    return store.get(key) ?? null
  },
  setItem(key: string, value: string): void {
    store.set(key, value)
  },
  removeItem(key: string): void {
    store.delete(key)
  },
  clear(): void {
    store.clear()
  },
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
  configurable: true,
})

const matchMediaMock = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
})

if (typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn(matchMediaMock),
  })
}

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
})

if (typeof globalThis.IntersectionObserver === 'undefined') {
  class IntersectionObserverMock implements IntersectionObserver {
    readonly root = null
    readonly rootMargin = '0px'
    readonly thresholds = [0]

    constructor(private readonly callback: IntersectionObserverCallback) {}

    disconnect = vi.fn()

    observe = (element: Element) => {
      this.callback(
        [
          {
            boundingClientRect: element.getBoundingClientRect(),
            intersectionRatio: 1,
            intersectionRect: element.getBoundingClientRect(),
            isIntersecting: true,
            rootBounds: null,
            target: element,
            time: 0,
          },
        ],
        this,
      )
    }

    takeRecords = () => []

    unobserve = vi.fn()
  }

  Object.defineProperty(globalThis, 'IntersectionObserver', {
    writable: true,
    value: IntersectionObserverMock,
  })
}

beforeEach(() => {
  store.clear()
  store.set('my-rents-locale', 'en')
})
