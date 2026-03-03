'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SparkleIcon from '@/components/ui/SparkleIcon'

const STANDARD = [
  { size: '1 Bed | 1 Bath', price: '$100' },
  { size: '2 Bed | 1.5 Bath', price: '$120' },
  { size: '2 Bed | 2 Bath', price: '$135' },
  { size: '3 Bed | 2 Bath', price: '$160' },
  { size: '3 Bed | 2.5 Bath', price: '$175' },
  { size: '4 Bed | 3 Bath', price: '$190' },
  { size: '4 Bed | 3.5 Bath', price: '$205' },
  { size: '5 Bed | 4 Bath', price: '$260' },
  { size: '5 Bed | 4.5 Bath', price: '$280' },
]

const DEEP = [
  { size: '1 Bed | 1 Bath', price: '$150' },
  { size: '2 Bed | 1.5 Bath', price: '$170' },
  { size: '2 Bed | 2 Bath', price: '$185' },
  { size: '3 Bed | 2 Bath', price: '$215' },
  { size: '3 Bed | 2.5 Bath', price: '$235' },
  { size: '4 Bed | 3 Bath', price: '$255' },
  { size: '4 Bed | 3.5 Bath', price: '$275' },
  { size: '5 Bed | 4 Bath', price: '$295' },
  { size: '5 Bed | 4.5 Bath', price: '$320' },
]

const MOVE = [
  { size: '1 Bed | 1–1.5 Bath', price: '$215' },
  { size: '2 Bed | 1.5–2 Bath', price: '$245' },
  { size: '3 Bed | 2–2.5 Bath', price: '$280' },
  { size: '4 Bed | 3–3.5 Bath', price: '$350' },
  { size: '5 Bed | 4–4.5 Bath', price: '$415' },
]

const ADDON_KEYS = [
  { key: 'windowCleaning', price: '$8' },
  { key: 'fridgeOven', price: '$25' },
  { key: 'cabinetInterior', price: '$40' },
  { key: 'bedSheetChange', price: '$12' },
  { key: 'laundry', price: '$20' },
]

const TABS = [
  { key: 'standard', labelKey: 'pricing.tabs.standard', data: STANDARD },
  { key: 'deep', labelKey: 'pricing.tabs.deep', data: DEEP },
  { key: 'move', labelKey: 'pricing.tabs.move', data: MOVE },
] as const

type TabKey = (typeof TABS)[number]['key']

export default function PriceList() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<TabKey>('standard')

  const activeData = TABS.find((tab) => tab.key === activeTab)!.data

  return (
    <section
      id="pricing"
      className="relative overflow-hidden pt-20 pb-20"
      style={{ background: 'linear-gradient(135deg, #342735 0%, #6F5682 60%, #A48FB4 100%)' }}
    >
      <div className="absolute left-[-5%] top-[10%] h-64 w-64 rounded-full bg-[#F6CD3A]/10 blur-3xl" />
      <div className="absolute bottom-[5%] right-[-5%] h-80 w-80 rounded-full bg-[#A48FB4]/20 blur-3xl" />
      <SparkleIcon size={36} className="animate-float absolute left-6 top-16 opacity-40" />
      <SparkleIcon size={20} className="animate-sparkle-delay absolute right-10 top-24 opacity-30" />
      <SparkleIcon size={28} className="animate-float-delay absolute bottom-16 right-6 opacity-40" />

      <div className="relative mx-auto max-w-2xl px-6 sm:px-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <SparkleIcon size={20} />
            <span className="text-sm font-bold uppercase tracking-widest text-[#F6CD3A]">
              {t('pricing.sectionLabel')}
            </span>
          </div>
          <h2 className="font-heading mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-[#DCD0D5]">{t('pricing.subtitle')}</p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-[#F6CD3A] text-deep-purple shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Price rows */}
        <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
          {activeData.map((item, i) => (
            <div
              key={item.size}
              className={`flex items-center justify-between px-8 py-2.5 transition-colors hover:bg-white/5 ${
                i !== activeData.length - 1 ? 'border-b border-white/10' : ''
              } ${i === 0 ? 'pt-5' : ''} ${i === activeData.length - 1 ? 'pb-5' : ''}`}
            >
              <span className="font-heading text-base font-semibold text-white">{item.size}</span>
              <span className="text-xl font-extrabold text-[#F6CD3A]">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div className="relative mx-auto mt-6 max-w-2xl px-6 sm:px-10">
        <div className="mb-3 flex items-center gap-2">
          <SparkleIcon size={16} />
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-[#F6CD3A]">
            {t('pricing.addonsTitle')}
          </span>
        </div>
        <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
          {ADDON_KEYS.map((item, i) => (
            <div
              key={item.key}
              className={`flex items-center justify-between px-8 py-2 transition-colors hover:bg-white/5 ${
                i !== ADDON_KEYS.length - 1 ? 'border-b border-white/10' : ''
              } ${i === 0 ? 'pt-5' : ''} ${i === ADDON_KEYS.length - 1 ? 'pb-5' : ''}`}
            >
              <span className="text-sm text-[#DCD0D5]">{t(`pricing.addons.${item.key}`)}</span>
              <span className="font-heading text-base font-bold text-[#F6CD3A]">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Commercial note */}
      <div className="relative mx-auto max-w-2xl px-6 sm:px-10">
        <div className="mt-8 rounded-xl bg-white/10 p-10 text-center backdrop-blur-sm">
          <SparkleIcon size={24} className="mx-auto mb-3" />
          <p className="mb-4 text-base text-[#DCD0D5]">{t('pricing.commercialNote')}</p>
          <a
            href="#contact"
            className="gradient-golden inline-block rounded-full px-8 py-3 text-sm font-bold text-deep-purple shadow-lg transition-all hover:scale-105"
          >
            {t('pricing.contactUs')}
          </a>
        </div>
      </div>
    </section>
  )
}
