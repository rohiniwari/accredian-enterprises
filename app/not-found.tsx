import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-xl mx-auto mb-6">
          <span className="text-white font-bold text-3xl font-display">404</span>
        </div>
        <h1 className="text-4xl font-display font-800 text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/30"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

