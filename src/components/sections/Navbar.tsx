'use client'

import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import SparkleIcon from '@/components/ui/SparkleIcon'

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: t('nav.services') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#reviews', label: t('nav.reviews') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#342735]/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6">
        {/* Logo — left */}
        <div className="flex-1">
          <a href="#" className="flex items-center gap-2">
            <SparkleIcon size={28} color="#F6CD3A" className="animate-sparkle" />
            <span className="font-heading text-lg font-extrabold leading-tight text-white">
              Stefan&apos;s Pro{' '}
              <span className="text-gradient-purple">Cleaning</span>
            </span>
          </a>
        </div>

        {/* Desktop nav — center */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-light uppercase tracking-widest text-[#DCD0D5] transition-colors hover:text-[#F6CD3A]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — right */}
        <div className="hidden flex-1 justify-end md:flex">
          <a
            href="#contact"
            className="gradient-golden rounded-full px-5 py-2 text-sm font-bold text-[#342735] transition-all hover:scale-105"
          >
            {t('nav.bookNow')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 w-6 rounded-full bg-white transition-all"
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#342735]/98 px-4 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-xs font-light uppercase tracking-widest text-[#DCD0D5] hover:text-[#F6CD3A]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
