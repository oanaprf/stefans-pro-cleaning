'use client'

import { useTranslation } from 'react-i18next'
import SparkleIcon from '@/components/ui/SparkleIcon'

const EMAIL = 'stefansprocleaning@yahoo.com'
const PHONE = '786-972-2044'
const PHONE_RAW = '+17869722044'

function EmailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="7" width="22" height="14" rx="3" stroke="#F6CD3A" strokeWidth="2" />
      <path d="M3 10L14 17L25 10" stroke="#F6CD3A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 4H12L14 9L11.5 10.5C12.5 12.7 15.3 15.5 17.5 16.5L19 14L24 16V20C24 22.2 22.2 24 20 24C11.2 24 4 16.8 4 8C4 5.8 5.8 4 8 4Z"
        stroke="#F6CD3A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #342735 0%, #6F5682 100%)' }}
    >
      {/* Animated sparkle cloud */}
      <div className="absolute left-[5%] top-[15%]">
        <SparkleIcon size={48} className="animate-float opacity-30" />
      </div>
      <div className="absolute right-[8%] top-[20%]">
        <SparkleIcon size={32} className="animate-sparkle opacity-25" color="#A48FB4" />
      </div>
      <div className="absolute bottom-[15%] left-[15%]">
        <SparkleIcon size={22} className="animate-float-delay opacity-20" />
      </div>
      <div className="absolute bottom-[10%] right-[20%]">
        <SparkleIcon size={40} className="animate-sparkle-delay opacity-30" />
      </div>

      {/* Glow circles */}
      <div className="animate-pulse-slow absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-[#F6CD3A]/10 blur-3xl" />
      <div className="animate-pulse-slow absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-[#A48FB4]/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SparkleIcon size={40} className="mx-auto mb-4 animate-sparkle" />

        <h2 className="font-heading mb-4 text-4xl font-extrabold text-white sm:text-5xl">
          {t('contact.title')}
        </h2>
        <p className="mb-10 text-lg text-[#DCD0D5]">{t('contact.subtitle')}</p>

        {/* Contact cards */}
        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg"
          >
            <EmailIcon />
            <div className="text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#F6CD3A]">
                {t('contact.emailLabel')}
              </div>
              <div className="text-sm font-medium text-white">{EMAIL}</div>
            </div>
          </a>

          <a
            href={`tel:${PHONE_RAW}`}
            className="group flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg"
          >
            <PhoneIcon />
            <div className="text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#F6CD3A]">
                {t('contact.phoneLabel')}
              </div>
              <div className="text-sm font-medium text-white">{PHONE}</div>
            </div>
          </a>
        </div>

        <p className="text-sm text-[#A48FB4]">{t('contact.availability')}</p>
      </div>
    </section>
  )
}
