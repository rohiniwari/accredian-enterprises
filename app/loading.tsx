export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-white font-bold text-lg font-display">A</span>
        </div>
        <p className="text-gray-500 text-sm font-medium">Loading Accredian Enterprise...</p>
      </div>
    </div>
  )
}

