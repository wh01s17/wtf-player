'use client'
import React, { useState } from 'react'
import { Results } from './Results'

export const Search = () => {
    const [search, setSearch] = useState('')
    const [queryTerm, setQueryTerm] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (search.trim().length > 0) {
            setQueryTerm(search.trim())
        }
    }
    return (
        <section className='flex flex-col gap-4 p-20'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Buscar videos..."
                        aria-label="Buscar videos en YouTube"
                        className='border w-full p-2 rounded-2xl pl-4'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className='border cursor-pointer max-w-md p-2 hover:bg-white hover:text-black rounded-2xl transition-colors'
                >
                    Buscar
                </button>
            </form>

            {queryTerm && <Results params={queryTerm} />}
        </section>
    )
}