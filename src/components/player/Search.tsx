'use client'
import React, { useState } from 'react'
import { Results } from './Results'
import { Button } from '../ui/button'

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
        <section className='flex flex-col gap-4'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <div className="relative w-1/4 max-w-md">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Buscar videos..."
                        aria-label="Buscar videos en YouTube"
                        className='border w-full p-2 rounded-md pl-4'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <Button
                    type="submit"
                    className='w-1/4 p-5 cursor-pointer'
                >
                    Buscar
                </Button>
            </form>

            {queryTerm && <Results params={queryTerm} />}
        </section>
    )
}