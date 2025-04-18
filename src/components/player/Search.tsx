'use client'
import React, { useState } from 'react'
import { Results } from './Results'

export const Search = () => {
    const [search, setSearch] = useState('')
    const [activeSearch, setActiveSearch] = useState('')
    const [showResults, setShowResults] = useState(false)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        setShowResults(false)
    }

    const handleSubmit = () => {
        if (search.trim()) {
            setActiveSearch(search)
            setShowResults(true)
        }
    }

    return (
        <section className='flex flex-col gap-2 p-20'>
            <input
                type="text"
                name="search"
                id="search"
                className='border w-1/4 p-2'
                value={search}
                onChange={handleSearch}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <button
                className='border cursor-pointer w-1/4 p-2 hover:bg-white hover:text-black'
                onClick={handleSubmit}
            >
                Search
            </button>

            {showResults && <Results params={activeSearch} />}
        </section>
    )
}