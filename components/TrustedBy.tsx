export default function TrustedBy() {
  const logos = [
    'IIT Bombay', 'IIT Delhi', 'IIM Lucknow', 'IIM Visakhapatnam',
    'SP Jain', 'XLRI', 'IIT Guwahati', 'IIM Trichy',
    'IIT Kanpur', 'IIM Ahmedabad', 'BITS Pilani', 'ISB Hyderabad',
  ]

  return (
    <section className="py-14 bg-gray-50 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Programs co-designed with India&apos;s most prestigious institutions
        </p>
      </div>

      <div className="relative">
        <div className="marquee-track">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-6 px-7 py-3.5 bg-white rounded-xl border border-gray-200 shadow-sm min-w-max"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mr-2.5 shadow-md">
                <span className="text-white text-xs font-bold">{name[0]}</span>
              </div>
              <span className="text-gray-700 font-display font-semibold text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}

