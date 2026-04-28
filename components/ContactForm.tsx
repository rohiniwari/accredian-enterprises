'use client'
import { useState, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  teamSize: string
  interest: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  teamSize: '',
  interest: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.company.trim()) e.company = 'Company name is required'
    if (!form.teamSize) e.teamSize = 'Please select team size'
    if (!form.interest) e.interest = 'Please select your interest'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="section-fade">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-gray-900 mb-5">
              Start Your Enterprise
              <span className="gradient-text block">Learning Journey</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Talk to our L&amp;D consultants and get a custom program recommendation tailored to your organization&apos;s goals — completely free.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              {[
                { icon: '📞', label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: '📧', label: 'Email', value: 'enterprise@accredian.com', href: 'mailto:enterprise@accredian.com' },
                { icon: '📍', label: 'Headquarters', value: 'Bengaluru, Karnataka, India', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-xl transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-gray-800 font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-8 p-5 bg-blue-50 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-800">Join 500+ enterprise partners</p>
              </div>
              <p className="text-xs text-gray-500">Average response time: under 2 business hours</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="section-fade animate-delay-200">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display font-extrabold text-gray-900 text-2xl mb-2">You&apos;re all set!</h3>
                <p className="text-gray-600 mb-6">
                  Thanks for reaching out. Our enterprise team will contact you within 2 business hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-blue-600 font-semibold hover:underline text-sm"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-400'}`}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">Work Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="priya@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-400'}`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-semibold text-gray-700 mb-1.5">Company Name *</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="TechCorp India Pvt. Ltd."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.company ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-400'}`}
                    aria-invalid={errors.company ? 'true' : 'false'}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                  />
                  {errors.company && <p id="company-error" className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                    />
                  </div>

                  {/* Team Size */}
                  <div>
                    <label htmlFor="contact-teamSize" className="block text-sm font-semibold text-gray-700 mb-1.5">Team Size *</label>
                    <select
                      id="contact-teamSize"
                      name="teamSize"
                      value={form.teamSize}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.teamSize ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-400'}`}
                      aria-invalid={errors.teamSize ? 'true' : 'false'}
                      aria-describedby={errors.teamSize ? 'teamSize-error' : undefined}
                    >
                      <option value="">Select size</option>
                      <option value="1-50">1–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-500">201–500 employees</option>
                      <option value="501-1000">501–1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                    {errors.teamSize && <p id="teamSize-error" className="text-red-500 text-xs mt-1">{errors.teamSize}</p>}
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <label htmlFor="contact-interest" className="block text-sm font-semibold text-gray-700 mb-1.5">Interested In *</label>
                  <select
                    id="contact-interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.interest ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-400'}`}
                    aria-invalid={errors.interest ? 'true' : 'false'}
                    aria-describedby={errors.interest ? 'interest-error' : undefined}
                  >
                    <option value="">Select a program area</option>
                    <option value="data-ai">Data Science &amp; AI / ML</option>
                    <option value="product">Product Management</option>
                    <option value="leadership">Leadership &amp; Management</option>
                    <option value="tech">Software Engineering</option>
                    <option value="custom">Custom Program</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.interest && <p id="interest-error" className="text-red-500 text-xs mt-1">{errors.interest}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">Tell us about your goals</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="What skills does your team need? Any specific timelines or requirements?"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-600" role="alert">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book Free Consultation
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400">
                  No spam. We&apos;ll reach out within 2 business hours. Your data is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

