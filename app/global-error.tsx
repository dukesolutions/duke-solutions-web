'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-8">{error.message}</p>
            <button
              onClick={() => reset()}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
