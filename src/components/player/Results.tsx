'use client'
import React, { useEffect, useState } from 'react'
import { getResults } from '../../services/youtube'
import { YouTubeApiResponse, YouTubeVideo } from '@/types/youtube'
import { Loading } from '../ui/Loading'

export const Results = ({ params }: { params: string }) => {
    const [results, setResults] = useState<YouTubeVideo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchResults = async () => {
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

        if (params) {
            fetchResults()
        }
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
                                <li key={video.id.videoId}>
                                    {video.snippet.title}
                                </li>
                            ))
                        }
                    </ul>
            }
        </div>
    )
}