import React from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { PlaySquareIcon } from "lucide-react"
import Link from 'next/link'

export const NavBar = () => {
    return (
        <nav className='flex justify-between px-20 py-10 border-b-2'>
            <Link href='/' className='flex text-5xl items-center w-fit'>
                <h1 className='mr-3'>WTF Player</h1>
                <PlaySquareIcon className="w-15 h-15" />
            </Link>

            <ThemeToggle />
        </nav>
    )
}
