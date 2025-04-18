import React from 'react'
import { Search } from './Search'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Container } from '../layout/Container'

export const Player = () => {
    return (
        <div>
            <ThemeToggle />
            <Container>
                <Search />
            </Container>
        </div>

    )
}
