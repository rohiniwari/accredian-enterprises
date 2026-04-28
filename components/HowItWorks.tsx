'use client'
import { useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discovery & Skill Gap Analysis',
    desc: 'Our L&D consultants sit with your team to map skill gaps, business goals, and requirements. We build a clear picture of where your organization is and where it needs to go.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    title: 'Custom Program Design',
    desc: 'We co-design a tailored learning journey with the right university partner — calibrated to your industry, tech stack, and strategic priorities.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    number: '03',
    title: 'Launch & Live Learning',
    desc: 'Your cohort goes live. Employees learn through live sessions, mentorship, capstone projects, and peer collaboration — on a schedule that doesn\'t disrupt work.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    number: '04',
    title: 'Analytics & ROI Tracking',
    desc: 'Monitor everything in real time via your enterprise dashboard. Completion rates, skill progression, ROI metrics, and certification status — all at a glance.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: 'from-violet-500 to-violet-600',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)

  return (
    <section id="how-it-works" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-gray-900 mb-4">
            From Skill Gap to
            <span className="gradient-text block">Measurable Results</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A proven 4-step process that transforms your workforce from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200 mx-24" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className={`section-fade animate-delay-${i * 100} text-center`}>
                {/* Icon circle */}
                <div className="relative inline-block mb-6">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl mx-auto`}>
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-display font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 section-fade">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-center">
            <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-3">
              Ready to transform your workforce?
            </h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Join 500+ companies that have partnered with Accredian Enterprise to build future-ready teams.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              Book a Free Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

