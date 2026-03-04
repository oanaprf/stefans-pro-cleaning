'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import SparkleIcon from '@/components/ui/SparkleIcon'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="gradient-hero relative min-h-screen overflow-hidden pt-24">
      {/* Background decorative blobs */}
      <div className="animate-pulse-slow absolute top-[20%] left-[-10%] h-72 w-72 rounded-full bg-[#A48FB4]/20 blur-3xl" />
      <div className="animate-pulse-slow absolute top-[10%] right-[-5%] h-96 w-96 rounded-full bg-[#F6CD3A]/10 blur-3xl" />
      <div className="animate-pulse-slow absolute bottom-[10%] left-[30%] h-64 w-64 rounded-full bg-[#6F5682]/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:py-24">
        {/* Left: Text */}
        <div className="order-last flex-1 text-center lg:order-first lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-[#F6CD3A]">
              {t('hero.tagline')}
            </span>
          </div>

          <h1 className="font-heading mb-4 text-5xl leading-tight font-extrabold text-white sm:text-6xl lg:text-7xl">
            {t('hero.headline')}
            <br />
            <span className="text-gradient">{t('hero.headlineAccent')}</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-[#DCD0D5] lg:mx-0">
            {t('hero.subtext')}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="#contact"
              className="gradient-golden glow-golden inline-flex items-center gap-3 rounded-full px-10 py-4 text-lg font-extrabold text-[#342735] shadow-xl transition-all hover:scale-105"
            >
              <SparkleIcon size={22} color="#342735" />
              {t('hero.cta')}
              <SparkleIcon size={22} color="#342735" />
            </a>
            <a
              href="#services"
              className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>

        {/* Right: Mascot image */}
        <div className="relative order-first flex flex-1 items-center justify-center lg:order-last">
          {/* Spinning outer ring */}
          <div className="animate-spin-slow absolute h-[420px] w-[420px] rounded-full border-2 border-dashed border-[#F6CD3A]/40 sm:h-[520px] sm:w-[520px]" />

          {/* Glow ring */}
          <div className="mascot-ring relative h-[380px] w-[380px] sm:h-[460px] sm:w-[460px]">
            <div className="h-full w-full overflow-hidden rounded-full bg-white">
              <Image
                src={`${process.env.NODE_ENV === 'production' ? '/stefans-pro-cleaning' : ''}/hero-mascot.jpg`}
                alt="Stefan's Pro Cleaning Mascot"
                width={460}
                height={460}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Sparkle decorations — all around the image */}
          <SparkleIcon
            size={32}
            className="animate-float absolute top-6 -right-4"
          />
          <SparkleIcon
            size={22}
            className="animate-float-delay absolute bottom-14 -left-6"
          />
          <SparkleIcon
            size={18}
            className="animate-sparkle absolute right-6 bottom-2"
            color="#A48FB4"
          />
          <SparkleIcon
            size={26}
            className="animate-float absolute -top-4 left-1/3"
            color="#F6CD3A"
          />
          <SparkleIcon
            size={16}
            className="animate-sparkle-delay absolute right-2 bottom-1/3"
            color="#A48FB4"
          />
          <SparkleIcon
            size={20}
            className="animate-float-delay absolute top-1/3 -left-2"
          />
          <SparkleIcon
            size={14}
            className="animate-sparkle absolute top-1/2 -right-6"
            color="#F6CD3A"
          />
        </div>
      </div>
    </section>
  )
}
