'use client'
import React, { useEffect, useState } from 'react'
import { getResults } from '../../services/youtube'
import { YouTubeApiResponse, YouTubeVideo } from '@/types/youtube'
import { Loading } from '../ui/Loading'
import { useVideoStore } from '@/store/useVideoStore'

export const Results = ({ params }: { params: string }) => {
    const { setActiveVideoId } = useVideoStore()
    const [results, setResults] = useState<YouTubeVideo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchResults = async () => {
        if (params) {
            try {
                setLoading(true)
                const data = await getResults(params) as YouTubeApiResponse
                setResults(data.items || [])
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
        <div>
            {
                results.length === 0
                    ? <div>No se encontraron resultados</div>
                    : <ul>
                        {
                            results.map(video => (
                                <li
                                    key={video.id.videoId}
                                    onClick={() => setActiveVideoId(video.id.videoId)}
                                    className='cursor-pointer w-fit'
                                >
                                    {video.snippet.title}
                                </li>
                            ))
                        }
                    </ul>
            }
        </div>
    )
}