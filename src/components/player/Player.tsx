import React from 'react'
import { Search } from './Search'
import { PersistentVideoPlayer } from './PersistentVideoPlayer'
import { Video } from './Video'

export const Player = () => {
    return (
        <section className='py-10 px-20 flex'>
            <Search />
            <div id='video' className="w-1/2 aspect-video relative">
                <Video />
            </div>

        </section>

    )
}
