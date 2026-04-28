'use client'
import { useRef, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const categories = ['All', 'Data & AI', 'Product', 'Leadership', 'Tech']

const programs = [
  {
    category: 'Data & AI',
    title: 'PG Program in Data Science & AI',
    partner: 'IIT Guwahati',
    duration: '11 months',
    format: 'Live + Async',
    level: 'Intermediate',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-100 text-blue-700',
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'MLOps'],
  },
  {
    category: 'Data & AI',
    title: 'Advanced ML Engineering',
    partner: 'IIT Bombay',
    duration: '9 months',
    format: 'Live Cohort',
    level: 'Advanced',
    badge: 'High ROI',
    badgeColor: 'bg-green-100 text-green-700',
    skills: ['TensorFlow', 'PyTorch', 'LLMs', 'Cloud Deployment'],
  },
  {
    category: 'Product',
    title: 'Executive Product Management',
    partner: 'IIM Lucknow',
    duration: '6 months',
    format: 'Weekend Live',
    level: 'Intermediate',
    badge: 'New Batch',
    badgeColor: 'bg-purple-100 text-purple-700',
    skills: ['Product Strategy', 'OKRs', 'Roadmapping', 'GTM'],
  },
  {
    category: 'Leadership',
    title: 'CHRO & Leadership Excellence',
    partner: 'IIM Visakhapatnam',
    duration: '8 months',
    format: 'Blended',
    level: 'Senior',
    badge: 'CXO Track',
    badgeColor: 'bg-amber-100 text-amber-700',
    skills: ['People Strategy', 'Culture Design', 'Executive Presence'],
  },
  {
    category: 'Tech',
    title: 'Full Stack Engineering Mastery',
    partner: 'BITS Pilani',
    duration: '12 months',
    format: 'Live Cohort',
    level: 'Beginner–Intermediate',
    badge: 'Trending',
    badgeColor: 'bg-rose-100 text-rose-700',
    skills: ['React', 'Node.js', 'System Design', 'AWS'],
  },
  {
    category: 'Leadership',
    title: 'General Management Program',
    partner: 'IIM Trichy',
    duration: '10 months',
    format: 'Weekend Live',
    level: 'Mid-Senior',
    badge: 'IIM Certified',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    skills: ['Finance', 'Strategy', 'Operations', 'Marketing'],
  },
]

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)

  const filtered = activeCategory === 'All' ? programs : programs.filter((p) => p.category === activeCategory)

  return (
    <section id="programs" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 section-fade">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-gray-900 mb-4">
            World-Class Programs for
            <span className="gradient-text block">Every Career Stage</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Co-designed with India&apos;s leading institutions. No fluff — just industry-ready curriculum.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="section-fade flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog) => (
            <div
              key={prog.title}
              className="section-fade card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Card header */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${prog.badgeColor}`}>
                    {prog.badge}
                  </span>
                  <div className="text-right">
                    <p className="text-white/60 text-xs">in partnership with</p>
                    <p className="text-white font-display font-bold text-sm">{prog.partner}</p>
                  </div>
                </div>
                <h3 className="font-display font-bold text-white text-lg leading-tight">{prog.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    { icon: '⏱', val: prog.duration },
                    { icon: '📡', val: prog.format },
                    { icon: '📈', val: prog.level },
                  ].map((item) => (
                    <div key={item.val} className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <span>{item.icon}</span>
                      <span>{item.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {prog.skills.map((s) => (
                    <span key={s} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium">
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-auto block w-full text-center bg-gray-900 hover:bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200"
                >
                  Explore Program →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 section-fade">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            View All 50+ Programs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

