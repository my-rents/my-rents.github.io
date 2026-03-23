import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const readEnvValue = (value: string | undefined) => value?.trim() ?? ''

const firebaseConfig = {
  apiKey: readEnvValue(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: readEnvValue(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  databaseURL: readEnvValue(import.meta.env.VITE_FIREBASE_DATABASE_URL),
  projectId: readEnvValue(import.meta.env.VITE_FIREBASE_PROJECT_ID),
  storageBucket: readEnvValue(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: readEnvValue(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
  appId: readEnvValue(import.meta.env.VITE_FIREBASE_APP_ID),
}

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean)

const firebaseApp = isFirebaseConfigured
  ? getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig)
  : null

export const firestore = firebaseApp ? getFirestore(firebaseApp) : null
