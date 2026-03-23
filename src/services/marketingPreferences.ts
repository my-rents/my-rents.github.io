import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

import { firestore, isFirebaseConfigured } from '@/lib/firebase'

export type MarketingUnsubscribeResult = 'success' | 'invalidEmail' | 'notConfigured'

const emailPattern =
  /^[a-z0-9.!#$%&'*+=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i

const normalizeEmail = (email: string) => email.trim().toLowerCase()

export const unsubscribeFromMarketingEmails = async (
  email: string,
): Promise<MarketingUnsubscribeResult> => {
  const normalizedEmail = normalizeEmail(email)

  if (!emailPattern.test(normalizedEmail)) {
    return 'invalidEmail'
  }

  if (!isFirebaseConfigured || !firestore) {
    return 'notConfigured'
  }

  const suppressionRef = doc(firestore, 'emailSuppressions', normalizedEmail)

  await setDoc(
    suppressionRef,
    {
      email: normalizedEmail,
      source: 'website',
      status: 'unsubscribed',
      updatedAt: serverTimestamp(),
      unsubscribedAt: serverTimestamp(),
    },
    { merge: true },
  )

  return 'success'
}
