'use client'
import { useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const partners = [
  { name: 'IIT Guwahati', abbr: 'IITG', tier: 'Premier', color: 'from-blue-600 to-blue-800' },
  { name: 'IIT Bombay', abbr: 'IITB', tier: 'Premier', color: 'from-indigo-600 to-indigo-800' },
  { name: 'IIM Lucknow', abbr: 'IIML', tier: 'Premier', color: 'from-slate-600 to-slate-800' },
  { name: 'IIM Visakhapatnam', abbr: 'IIMV', tier: 'Premier', color: 'from-gray-700 to-gray-900' },
  { name: 'IIT Kanpur', abbr: 'IITK', tier: 'Premier', color: 'from-blue-700 to-blue-900' },
  { name: 'XLRI Jamshedpur', abbr: 'XLRI', tier: 'Premier', color: 'from-red-700 to-red-900' },
  { name: 'SP Jain', abbr: 'SPJ', tier: 'Associate', color: 'from-teal-600 to-teal-800' },
  { name: 'BITS Pilani', abbr: 'BITS', tier: 'Associate', color: 'from-violet-600 to-violet-800' },
  { name: 'IIM Trichy', abbr: 'IIMT', tier: 'Associate', color: 'from-cyan-600 to-cyan-800' },
]

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)

  return (
    <section id="partners" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Certification Partners
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-gray-900 mb-4">
            Credentials from India&apos;s
            <span className="gradient-text block">Most Prestigious Institutions</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every program carries the credential of a top-tier institution. No fluff. No self-certification.
          </p>
        </div>

        <div className="section-fade grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-4 mb-12">
          {partners.map((p) => (
            <div
              key={p.name}
              className="card-hover flex flex-col items-center gap-2 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                <span className="text-white font-display font-extrabold text-xs text-center leading-tight px-1">{p.abbr}</span>
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-xs font-semibold leading-tight">{p.name}</p>
                <p className={`text-xs mt-0.5 font-medium ${p.tier === 'Premier' ? 'text-amber-600' : 'text-gray-400'}`}>
                  {p.tier}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="section-fade bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: '🏛️', title: 'Government Recognized', desc: 'All our university partners are UGC & AICTE accredited institutions.' },
              { icon: '🎓', title: 'Industry-Validated', desc: 'Curriculum reviewed by senior practitioners from top Fortune 500 companies.' },
              { icon: '🌐', title: 'Globally Recognized', desc: 'Credentials accepted by employers across India, Middle East, and Southeast Asia.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

