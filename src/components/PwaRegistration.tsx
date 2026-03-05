'use client'

import { useEffect } from 'react'

export default function PwaRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/stefans-pro-cleaning/sw.js', { scope: '/stefans-pro-cleaning/' })
        .catch(() => {})
    }
  }, [])

  return null
}
