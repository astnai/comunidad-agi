'use client'

import { useEffect, useState } from "react"
import { Podcast } from "lucide-react"
import Link from "next/link"
import AudioPlayer from "./AudioPlayer"

export function ComunidadAgi() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="max-w-5xl mx-auto w-full px-3">
        <header className="flex justify-between items-center py-4 border-gray-200 dark:border-gray-800 sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <h1 className="text-lg font-bold tracking-tight">Comunidad AGI</h1>
          <AudioPlayer src="/sound.mp3" />
          <div className="flex items-center space-x-3">
            <Link
              href="https://open.spotify.com/show/4oFg0xXgZ5sZQZjYzQ4bYk"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium border border-black dark:border-white text-black hover:text-white dark:text-white rounded-lg transition-all duration-300 hover:bg-[#1A1A1A] dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Podcast className="w-3 h-3 mr-1.5" />
              Escuchar
            </Link>
          </div>
        </header>
      </div>

      {/* Hero */}
      <main className="flex-grow flex items-center justify-center pb-12 sm:pb-0 mt-[-56px] sm:mt-0">
        <div className="max-w-5xl mx-auto w-full px-3 py-4">
          <div className="max-w-3xl w-full mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tighter leading-none">
                Conectando<br className="sm:hidden" /> Mentes en IA
              </h2>
              <p className="text-sm sm:text-base max-w-xl mx-auto text-gray-800 dark:text-gray-300">
                Comunidad AGI es un espacio de Inteligencia Artificial ubicado en Latinoamérica.
                Comparte, aprende y crece con nosotros.
              </p>
              <div className="flex justify-center items-center space-x-3">
                <Link
                  href="https://ejemplo.com/podcast"
                  className="inline-flex items-center px-3 py-1.5 bg-black text-white hover:text-black dark:bg-white dark:text-black border border-black rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-white dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform"
                >
                  Escucha Nuestro Podcast
                </Link>
                <Link
                  href="#"
                  className="text-xs sm:text-sm font-regular text-gray-600 dark:text-white hover:underline focus:outline-none"
                >
                  Síguenos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 sm:relative">
        <div className="max-w-5xl mx-auto w-full px-3 py-2 flex justify-between items-center text-xs sm:text-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">
            Build by <a href="https://twitter.com/astnai" className="text-gray-600 dark:text-gray-400 hover:underline">astnai</a>
          </span>
          <div className="space-x-3">
            <Link
              href="https://github.com/astnai/comunidad-agi/web"
              className="text-gray-600 dark:text-gray-400 hover:underline"
            >
              Source
            </Link>
            <Link
              href="https://twitter.com/comunidadagi"
              className="text-gray-600 dark:text-gray-400 hover:underline"
            >
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}