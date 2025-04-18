'use client'
import { useVideoStore } from '@/store/useVideoStore'
import React, { useRef } from 'react'
import { usePathname } from 'next/navigation'

export const PersistentVideoPlayer = () => {
    const { activeVideoId, isPlaying, setIsPlaying } = useVideoStore()
    const pathname = usePathname()
    const playerRef = useRef<HTMLDivElement>(null)

    const isHomePage = pathname === '/'

    if (!activeVideoId || !isPlaying) return null

    // Estilos condicionales basados en la página actual
    const containerStyles = isHomePage
        ? "w-full h-full" // Simplemente ocupar todo el espacio de su contenedor padre
        : "fixed bottom-4 right-4 z-50 w-80 aspect-video shadow-lg rounded-lg overflow-hidden"

    // Solo mostrar el botón de cerrar en el mini-reproductor
    const closeButton = !isHomePage && (
        <div className="absolute top-2 right-2 z-10">
            <button
                onClick={() => setIsPlaying(false)}
                className="bg-black/70 text-white p-1 rounded-full hover:bg-black"
                aria-label="Cerrar video"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    )

    return (
        <div ref={playerRef} className={containerStyles}>
            {closeButton}

            <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
            />
        </div>
    )
}