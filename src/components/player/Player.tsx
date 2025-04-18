import React from 'react'
import { Search } from './Search'
import { Video } from './Video'

export const Player = () => {
    return (
        <div className='p-20 flex'>
            <Search />
            <Video />
        </div>

    )
}
