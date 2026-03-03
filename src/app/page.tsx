import I18nProvider from '@/components/ui/I18nProvider'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import ScrollingBanner from '@/components/sections/ScrollingBanner'
import Services from '@/components/sections/Services'
import PriceList from '@/components/sections/PriceList'
import Reviews from '@/components/sections/Reviews'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <ScrollingBanner />
        <Services />
        <PriceList />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  )
}
