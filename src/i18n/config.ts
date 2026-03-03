'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/common.json'
import es from './locales/es/common.json'
import uk from './locales/uk/common.json'
import ru from './locales/ru/common.json'

const resources = {
  en: { common: en },
  es: { common: es },
  uk: { common: uk },
  ru: { common: ru },
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
  })
}

export default i18n
