'use client'

import { useEffect, type ReactNode } from 'react'
import '@/i18n/config'

interface I18nProviderProps {
  children: ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // i18n is initialized via the import above
  }, [])

  return <>{children}</>
}
