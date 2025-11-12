import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">
          🚀 Payload CMS v3 + Vercel
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Twój sklep e-commerce jest gotowy!
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            href="/admin"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Panel Admina
          </Link>
          <Link
            href="/api"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            API Docs
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gray-100 rounded-lg max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">✅ Gotowe do użycia:</h2>
          <ul className="text-left space-y-2">
            <li>✓ Panel administracyjny (/admin)</li>
            <li>✓ Kolekcja Produktów z cenami i zdjęciami</li>
            <li>✓ Kolekcja Kategorii</li>
            <li>✓ Kolekcja Zamówień</li>
            <li>✓ System użytkowników z autoryzacją</li>
            <li>✓ Vercel Blob Storage dla zdjęć</li>
            <li>✓ Vercel Postgres jako baza danych</li>
            <li>✓ GraphQL + REST API</li>
          </ul>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Zbudowane z ❤️ używając Payload CMS v3</p>
        </div>
      </div>
    </main>
  )
}