'use client'
import React, { useState } from 'react'
import { Results } from './Results'

export const Search = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <section>
            <label htmlFor="search">Search</label>
            <input
                type="text"
                name="search"
                id="search"
                className='border w-1/4'
                value={search}
                onChange={handleSearch}
            />

            {
                search && <Results params={search} />
            }
        </section>
    )
}
