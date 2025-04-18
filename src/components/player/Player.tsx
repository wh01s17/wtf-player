import React from 'react'
import { Search } from './Search'
import { Video } from './Video'

export const Player = () => {
    return (
        <section className='py-10 px-20 flex'>
            <Search />
            <Video />
        </section>

    )
}
