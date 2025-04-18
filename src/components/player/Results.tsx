'use client'
import React, { useEffect, useState } from 'react'
import { getResults } from '../../services/youtube'

export const Results = ({ params }: { params: string }) => {
    const [results, setResults] = useState([])

    useEffect(() => {
        getResults(params)
    }, [])

    if (!results) return null

    return (
        <div>
            <ul>
                {
                    results.map(res => {
                        return <li>{res}</li>
                    })
                }
            </ul>
        </div>
    )
}
