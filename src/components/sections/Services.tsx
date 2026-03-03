'use client'

import { useTranslation } from 'react-i18next'
import SparkleIcon from '@/components/ui/SparkleIcon'

const SERVICE_ICONS = {
  standard: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
      <rect x="8" y="20" width="32" height="6" rx="3" fill="#F6CD3A" />
      <rect x="20" y="26" width="8" height="16" rx="2" fill="#A48FB4" />
      <path d="M12 20C12 14 18 8 24 8C30 8 36 14 36 20" stroke="#F6CD3A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="38" cy="12" r="4" fill="#F6CD3A" opacity="0.5" />
    </svg>
  ),
  deep: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
      <circle cx="24" cy="20" r="12" stroke="#F6CD3A" strokeWidth="3" />
      <path d="M24 8V4M24 36V32M8 20H4M44 20H40" stroke="#F6CD3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 20L28 16" stroke="#F6CD3A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="20" r="4" fill="#F6CD3A" />
      <path d="M20 38L28 44" stroke="#A48FB4" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  move: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
      <rect x="6" y="14" width="22" height="20" rx="3" stroke="#F6CD3A" strokeWidth="3" />
      <rect x="20" y="14" width="22" height="20" rx="3" stroke="#A48FB4" strokeWidth="3" />
      <path d="M28 24H36M36 24L33 21M36 24L33 27" stroke="#F6CD3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  commercial: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
      <rect x="8" y="10" width="32" height="28" rx="4" stroke="#F6CD3A" strokeWidth="3" />
      <path d="M8 18H40" stroke="#F6CD3A" strokeWidth="2.5" />
      <rect x="16" y="24" width="6" height="6" rx="1" fill="#F6CD3A" />
      <rect x="26" y="24" width="6" height="6" rx="1" fill="#A48FB4" />
      <path d="M20 38V34M28 38V34" stroke="#F6CD3A" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  addons: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
      <circle cx="18" cy="20" r="8" stroke="#F6CD3A" strokeWidth="3" />
      <path d="M24 26L36 38" stroke="#F6CD3A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="36" cy="14" r="5" fill="#A48FB4" opacity="0.7" />
      <path d="M36 10V18M32 14H40" stroke="#F6CD3A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

const SERVICES = ['standard', 'deep', 'moveInOut', 'commercial', 'addons'] as const

export default function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="relative overflow-hidden py-12" style={{ background: 'linear-gradient(180deg, #A48FB4 0%, #DCD0D5 30%, #FBFAFA 100%)' }}>
      <SparkleIcon size={40} className="animate-float absolute right-8 top-8 opacity-30" />
      <SparkleIcon size={24} className="animate-float-delay absolute bottom-12 left-12 opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <SparkleIcon size={20} />
            <span className="text-sm font-bold uppercase tracking-widest text-[#6F5682]">
              Our Services
            </span>
          </div>
          <h2 className="font-heading mb-4 text-4xl font-extrabold text-[#342735] sm:text-5xl">
            {t('services.title')}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#6F5682]">{t('services.subtitle')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {SERVICES.map((key) => {
            const iconKey = key === 'moveInOut' ? 'move' : key === 'addons' ? 'addons' : key
            return (
              <div
                key={key}
                className="group relative w-full overflow-hidden rounded-xl px-7 pt-10 pb-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                style={{ background: 'linear-gradient(135deg, #6F5682 0%, #342735 100%)' }}
              >
                <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <SparkleIcon size={20} />
                </div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  {SERVICE_ICONS[iconKey as keyof typeof SERVICE_ICONS]}
                </div>
                <h3 className="font-heading mb-2 text-xl font-bold uppercase text-white">
                  {t(`services.${key}.name`)}
                </h3>
                <p className="text-sm leading-relaxed text-[#DCD0D5]">
                  {t(`services.${key}.desc`)}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[#F6CD3A]">
                  <SparkleIcon size={14} />
                  <span className="text-xs font-semibold uppercase tracking-wider">Charlotte, NC</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
