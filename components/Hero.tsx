'use client'
import { useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'


const stats = [
  { value: '500+', label: 'Enterprise Partners' },
  { value: '94%', label: 'Completion Rate' },
  { value: '40%', label: 'Avg. Productivity Boost' },
  { value: '10K+', label: 'Employees Upskilled' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveal(containerRef)

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center" ref={containerRef}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-blue-400/10 blur-2xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="section-fade inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Trusted by 500+ Enterprises Across India
            </div>

            <h1 className="section-fade animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Upskill Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                Workforce at Scale
              </span>
            </h1>

            <p className="section-fade animate-delay-200 text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Partner with IITs, IIMs, and global universities to transform your teams with curated programs, live mentorship, and real-time analytics — all delivering measurable ROI.
            </p>

            <div className="section-fade animate-delay-300 flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:-translate-y-0.5 text-sm"
              >
                Book a Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                See How It Works
              </a>
            </div>

            {/* Stats row */}
            <div className="section-fade animate-delay-400 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-display font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-300 mt-0.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual dashboard card */}
          <div className="section-fade animate-delay-300 hidden lg:block">
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-widest">Learning Dashboard</p>
                    <p className="text-white font-display font-bold text-lg">Q2 2025 Overview</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-green-400/20 border border-green-400/30 flex items-center justify-center">
                    <span className="text-green-300 text-xs font-bold">↑</span>
                  </div>
                </div>

                {/* Progress bars */}
                {[
                  { label: 'Data Science', pct: 87, color: 'bg-blue-400' },
                  { label: 'AI / ML Engineering', pct: 74, color: 'bg-indigo-400' },
                  { label: 'Product Management', pct: 91, color: 'bg-cyan-400' },
                  { label: 'Leadership', pct: 68, color: 'bg-purple-400' },
                ].map((item) => (
                  <div key={item.label} className="mb-4">
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-3 mt-5">
                  {[
                    { val: '1,240', label: 'Active Learners' },
                    { val: '96%', label: 'Satisfaction' },
                    { val: '38', label: 'Programs Running' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-white font-display font-bold text-lg">{s.val}</div>
                      <div className="text-white/60 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-2xl p-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">Certificate Issued</p>
                  <p className="text-xs text-gray-500">IIT Bombay — ML Ops</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-3">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['#3b82f6', '#8b5cf6', '#f59e0b'].map((c, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">+12 enrolled today</p>
                    <p className="text-xs text-gray-500">across 3 programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 80L1440 80L1440 40C1200 0 720 80 360 40C180 20 60 60 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

