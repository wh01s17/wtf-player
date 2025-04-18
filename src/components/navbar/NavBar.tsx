import React from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { PlaySquareIcon } from "lucide-react"
import Link from 'next/link'
import { Button } from '../ui/button'

export const NavBar = () => {
    return (
        <nav className='flex justify-between px-20 py-10 border-b-2'>
            <Link href='/' className='flex text-5xl items-center w-fit'>
                <h1 className='mr-3'>WTF Player</h1>
                <PlaySquareIcon className="w-15 h-15" />
            </Link>

            <div className='flex items-center justify-end w-fit'>
                <div className="space-x-2 mr-5">
                    <Button variant="outline">Iniciar sesión</Button>
                    <Button>Registrarse</Button>
                </div>
                <ThemeToggle />
            </div>


        </nav>
    )
}
