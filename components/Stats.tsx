'use client'
import { useRef, useState, useEffect } from 'react'
import { useScrollRevealOnce } from '@/hooks/useScrollReveal'

const stats = [
  { value: 500, suffix: '+', label: 'Enterprise Partners', icon: '🏢', desc: 'Companies trust us for L&D' },
  { value: 94, suffix: '%', label: 'Completion Rate', icon: '✅', desc: 'Industry-leading engagement' },
  { value: 10000, suffix: '+', label: 'Employees Upskilled', icon: '👥', desc: 'Across India & beyond' },
  { value: 40, suffix: '%', label: 'Productivity Boost', icon: '📈', desc: 'Average within 6 months' },
  { value: 500, suffix: '+', label: 'Expert Mentors', icon: '🧑‍🏫', desc: 'Industry practitioners' },
  { value: 96, suffix: '%', label: 'Satisfaction Score', icon: '⭐', desc: 'From L&D leaders' },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [start, target, duration])

  return count
}

function StatCard({ stat, startCount }: { stat: typeof stats[0]; startCount: boolean }) {
  const count = useCountUp(stat.value, 2000, startCount)
  return (
    <div className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
      <div className="text-3xl mb-3">{stat.icon}</div>
      <div className="text-4xl font-display font-extrabold text-blue-600 mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="font-display font-bold text-gray-900 text-base mb-1">{stat.label}</div>
      <div className="text-gray-400 text-xs">{stat.desc}</div>
    </div>
  )
}

export default function Stats() {
  const [startCount, setStartCount] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useScrollRevealOnce(ref, () => setStartCount(true), 0.2)

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-gray-900 mb-4">
            The Numbers Behind
            <span className="gradient-text block">Our Success</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 section-fade">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} startCount={startCount} />
          ))}
        </div>
      </div>
    </section>
  )
}

