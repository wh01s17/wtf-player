'use client'
import { useVideoStore } from '@/store/useVideoStore'
import React from 'react'

export const Video = () => {
    const { activeVideoId } = useVideoStore()

    return (
        <section className='w-1/2 flex items-center justify-center'>
            <div className="aspect-video w-full">
                {
                    activeVideoId.length > 0 && <iframe
                        src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                    />
                }

            </div>
        </section>
    )
}