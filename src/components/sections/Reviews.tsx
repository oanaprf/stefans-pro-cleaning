'use client'

import { useTranslation } from 'react-i18next'
import SparkleIcon from '@/components/ui/SparkleIcon'

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#F6CD3A">
          <path d="M9 1L11.12 6.26L17 6.97L12.82 11.04L13.99 17L9 14.27L4.01 17L5.18 11.04L1 6.97L6.88 6.26L9 1Z" />
        </svg>
      ))}
    </div>
  )
}

const REVIEW_KEYS = ['review1', 'review2', 'review3', 'review4'] as const

const AVATAR_COLORS = [
  'from-[#6F5682] to-[#A48FB4]',
  'from-[#BE7B58] to-[#E6B48D]',
  'from-[#342735] to-[#6F5682]',
  'from-[#A48FB4] to-[#F6CD3A]',
]

export default function Reviews() {
  const { t } = useTranslation()

  return (
    <section id="reviews" className="gradient-light relative overflow-hidden py-20">
      <SparkleIcon size={44} className="animate-float absolute right-6 top-8 opacity-20" />
      <SparkleIcon size={20} className="animate-sparkle absolute bottom-10 left-8 opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <SparkleIcon size={20} />
            <span className="text-sm font-bold uppercase tracking-widest text-[#6F5682]">
              Reviews
            </span>
          </div>
          <h2 className="font-heading mb-4 text-4xl font-extrabold text-[#342735] sm:text-5xl">
            {t('reviews.title')}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#6F5682]">{t('reviews.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEW_KEYS.map((key, i) => (
            <div
              key={key}
              className="glow-soft group relative overflow-hidden rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top accent bar */}
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${AVATAR_COLORS[i]}`}
              />

              <div className="mb-4 flex items-center gap-3">
                {/* Avatar */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_COLORS[i]} font-heading text-lg font-bold text-white shadow-md`}
                >
                  {t(`reviews.${key}.name`).charAt(0)}
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-[#342735]">
                    {t(`reviews.${key}.name`)}
                  </div>
                  <div className="text-xs text-[#A48FB4]">{t(`reviews.${key}.location`)}</div>
                </div>
              </div>

              <StarRating />

              <p className="mt-3 text-sm leading-relaxed text-[#6F5682]">
                &ldquo;{t(`reviews.${key}.text`)}&rdquo;
              </p>

              <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                <SparkleIcon size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
