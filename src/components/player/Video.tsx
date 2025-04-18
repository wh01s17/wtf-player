'use client'
import { useVideoStore } from '@/store/useVideoStore'
import React from 'react'
import '@justinribeiro/lite-youtube'

export const Video = () => {
    const { activeVideoId } = useVideoStore()

    return (
        <section className='w-1/2'>
            {React.createElement('lite-youtube', { videoid: activeVideoId })}
        </section>
    )
}