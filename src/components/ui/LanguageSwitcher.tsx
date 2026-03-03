'use client'

import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'uk', label: 'UK', flag: '🇺🇦' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
]

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'footer'
}

export default function LanguageSwitcher({
  variant = 'navbar',
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation()
  const current = i18n.language

  const isNavbar = variant === 'navbar'

  return (
    <div className="flex items-center gap-1">
      {LANGUAGES.map((lang) => {
        const isActive = current === lang.code
        return (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            title={lang.label}
            className={[
              'flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-200',
              isNavbar
                ? isActive
                  ? 'bg-[#F6CD3A] text-[#342735] shadow-md'
                  : 'text-[#DCD0D5] hover:bg-white/10 hover:text-white'
                : isActive
                  ? 'bg-[#F6CD3A] text-[#342735] shadow-md'
                  : 'text-[#A48FB4] hover:bg-[#6F5682]/20 hover:text-[#342735]',
            ].join(' ')}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        )
      })}
    </div>
  )
}
