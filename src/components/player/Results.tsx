'use client'
import React, { useEffect, useState } from 'react'
import { getResults } from '../../services/youtube'
import { YouTubeApiResponse, YouTubeVideo } from '@/types/youtube'
import { Loading } from '../ui/Loading'
import { useVideoStore } from '@/store/useVideoStore'
import Image from 'next/image'

export const Results = ({ params }: { params: string }) => {
    const { playVideo } = useVideoStore() // Cambiar por la función que activa el video
    const [results, setResults] = useState<YouTubeVideo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchResults = async () => {
        if (params) {
            try {
                setLoading(true)
                const data = await getResults(params) as YouTubeApiResponse
                setResults(data.items || [])

                // Opcional: Reproducir automáticamente el primer video
                if (data.items && data.items.length > 0) {
                    playVideo(data.items[0].id.videoId) // Usar playVideo en lugar de setActiveVideoId
                }
            } catch (err) {
                setError('Error al cargar los resultados')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchResults()
    }, [params])

    if (loading) return <Loading />
    if (error) return <div>{error}</div>

    return (
        <section>
            {
                results.length === 0
                    ? <div>No se encontraron resultados</div>
                    : <ul className="space-y-3">
                        {
                            results.map(video => (
                                <li
                                    key={video.id.videoId}
                                    onClick={() => playVideo(video.id.videoId)}
                                    className='cursor-pointer hover:bg-secondary p-2 rounded-lg transition-colors'
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-40 h-24 overflow-hidden rounded-md">
                                            <Image
                                                src={video.snippet.thumbnails.medium.url}
                                                alt={video.snippet.title}
                                                width={200}
                                                height={100}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-medium line-clamp-2">{video.snippet.title}</h3>
                                            <p className="text-sm text-muted-foreground">{video.snippet.channelTitle}</p>
                                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                                {video.snippet.description}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
            }
        </section>
    )
}