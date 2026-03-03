import SparkleIcon from '@/components/ui/SparkleIcon'

const ITEMS = [
  'PRO CLEANING',
  'CHARLOTTE NC',
  'RESIDENTIAL & COMMERCIAL',
  'SPARKLE GUARANTEED',
  'STRESS LESS WE CLEAN THE MESS',
]

export default function ScrollingBanner() {
  const repeated = [...ITEMS, ...ITEMS]

  return (
    <div className="relative overflow-hidden bg-[#F6CD3A] py-3">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-4">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#342735]">
              {item}
            </span>
            <SparkleIcon size={14} color="#342735" />
          </span>
        ))}
      </div>
    </div>
  )
}
