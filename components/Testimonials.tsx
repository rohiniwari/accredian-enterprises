'use client'
import { useRef, useState, useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.',
    name: 'Priya Sharma',
    role: 'CHRO, TechCorp India',
    company: 'TechCorp',
    avatar: 'PS',
    rating: 5,
    color: 'from-blue-500 to-blue-600',
  },
  {
    quote: 'The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.',
    name: 'Rahul Mehta',
    role: 'VP Engineering, FinanceAI',
    company: 'FinanceAI',
    avatar: 'RM',
    rating: 5,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    quote: 'We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.',
    name: 'Anita Krishnan',
    role: 'L&D Head, GlobalOps',
    company: 'GlobalOps',
    avatar: 'AK',
    rating: 5,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    quote: 'Choosing Accredian for our employees\' learning & development was one of the best decisions we made this year. The team\'s dedication and expertise is unmatched.',
    name: 'Vikram Nair',
    role: 'CEO, StartupBridge',
    company: 'StartupBridge',
    avatar: 'VN',
    rating: 5,
    color: 'from-violet-500 to-violet-600',
  },
  {
    quote: 'The custom curriculum they built for our cybersecurity team was spot on. Our incident response times dropped by 35% within the first quarter post-training.',
    name: 'Sneha Patel',
    role: 'CTO, SecureNet',
    company: 'SecureNet',
    avatar: 'SP',
    rating: 5,
    color: 'from-rose-500 to-rose-600',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-gray-900 mb-4">
            Trusted by L&amp;D Leaders
            <span className="gradient-text block">Across the Industry</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hear from CHROs, VPs, and L&amp;D heads who have transformed their organizations with Accredian Enterprise.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="section-fade max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-6 right-8 text-8xl font-serif text-blue-50 leading-none select-none" aria-hidden="true">&ldquo;</div>

            {/* Stars */}
            <div className="flex gap-1 mb-5" role="img" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl font-display font-medium text-gray-800 leading-relaxed mb-8 relative z-10">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold font-display shadow-lg`}>
                {t.avatar}
              </div>
              <div>
                <p className="font-display font-bold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="section-fade flex justify-center gap-2 mb-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? 'w-8 h-3 bg-blue-600' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Testimonial ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
            />
          ))}
        </div>

        {/* Avatar strip */}
        <div className="section-fade flex justify-center gap-3 flex-wrap">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 text-sm ${
                i === active
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-blue-200'
              }`}
            >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold`}>
                {item.avatar}
              </div>
              {item.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

