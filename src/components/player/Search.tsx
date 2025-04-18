'use client'
import React, { useState } from 'react'
import { Results } from './Results'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const Search = () => {
    const [search, setSearch] = useState('')
    const [queryTerm, setQueryTerm] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQueryTerm('')
        setSearch(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (search.trim().length > 0) {
            setQueryTerm(search.trim())
        }
    }

    return (
        <section className='flex flex-col gap-4 w-1/2'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <div className="relative w-1/2 max-w-md">
                    <Input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Buscar videos..."
                        aria-label="Buscar videos en YouTube"
                        className='border w-full p-4 rounded-md'
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <Button
                    type="submit"
                    className='w-1/2 p-4'
                >
                    Buscar
                </Button>
            </form>

            {
                queryTerm && <div className='h-140 overflow-y-scroll mr-10 scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-black'>
                    <Results params={queryTerm} />
                </div>
            }
        </section>
    )
}