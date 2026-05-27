import type { FirebaseApp } from 'firebase/app'
import { initializeApp } from 'firebase/app'
import type { Auth } from 'firebase/auth'
import { browserSessionPersistence, getAuth, setPersistence } from 'firebase/auth'
import type { Firestore } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import type { Functions } from 'firebase/functions'
import { getFunctions } from 'firebase/functions'

let _app: FirebaseApp | null = null
let _auth: Auth | null = null
let _db: Firestore | null = null
let _functions: Functions | null = null

function init(): FirebaseApp {
  if (_app) {
    return _app
  }

  _app = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  })

  return _app
}

export function getFirebaseAuth(): Auth {
  if (!_auth) {
    _auth = getAuth(init())
  }

  return _auth
}

export function getFirebaseDb(): Firestore {
  if (!_db) {
    _db = getFirestore(init())
  }

  return _db
}

export function getFirebaseFunctions(): Functions {
  if (!_functions) {
    _functions = getFunctions(init(), import.meta.env.VITE_FIREBASE_FUNCTIONS_REGION)
  }

  return _functions
}

export { browserSessionPersistence, setPersistence }

let persistencePromise: Promise<void> | null = null

export function ensurePortalSessionPersistence(): Promise<void> {
  if (!persistencePromise) {
    persistencePromise = setPersistence(getFirebaseAuth(), browserSessionPersistence).catch(
      (error) => {
        persistencePromise = null
        throw error
      },
    )
  }

  return persistencePromise
}
