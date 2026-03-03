'use client'

import { useTranslation } from 'react-i18next'
import SparkleIcon from '@/components/ui/SparkleIcon'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

const EMAIL = 'stefansprocleaning@yahoo.com'
const PHONE = '786-972-2044'
const PHONE_RAW = '+17869722044'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#342735] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <SparkleIcon size={24} className="animate-sparkle" />
            <span className="font-heading text-lg font-extrabold text-white">
              Stefan&apos;s Pro <span className="text-[#F6CD3A]">Cleaning</span>
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {(['services', 'pricing', 'reviews', 'contact'] as const).map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-[#A48FB4] transition-colors hover:text-[#F6CD3A]"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </div>

          {/* Language switcher */}
          <LanguageSwitcher variant="footer" />
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-[#6F5682] italic">&ldquo;{t('footer.tagline')}&rdquo;</p>

            <div className="flex items-center gap-4 text-xs text-[#6F5682]">
              <a
                href={`mailto:${EMAIL}`}
                className="transition-colors hover:text-[#F6CD3A]"
              >
                {EMAIL}
              </a>
              <span>·</span>
              <a
                href={`tel:${PHONE_RAW}`}
                className="transition-colors hover:text-[#F6CD3A]"
              >
                {PHONE}
              </a>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-[#6F5682]">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
