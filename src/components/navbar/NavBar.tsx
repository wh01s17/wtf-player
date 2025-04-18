'use client'
import React from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { PlaySquareIcon, ListMusic, User2Icon, LogOutIcon } from "lucide-react"
import Link from 'next/link'
import { Button } from '../ui/button'
import { useAuth } from '@/context/AuthContext'

export const NavBar = () => {
    // const { currentUser } = useAuth()
    const currentUser = true

    return (
        <nav className='flex justify-between px-20 py-10 border-b-2'>
            <div className='font-bold'>
                <Link href='/' className='flex text-5xl items-center w-fit duration-200 hover:text-zinc-500'>
                    <h1 className='mr-3'>WTF Player</h1>
                    <PlaySquareIcon className="w-15 h-15" />
                </Link>
                <h2 className='text-sm'>Where's The Funk?</h2>
            </div>

            <div className='flex items-center justify-end w-fit'>
                {
                    currentUser
                        ? <div className="space-x-2 mr-5">
                            <Link href='/'>
                                <Button variant="ghost">Reproductor <PlaySquareIcon /></Button>
                            </Link>
                            <Link href='/playlists'>
                                <Button variant="ghost">Listas de reproducción <ListMusic /></Button>
                            </Link>
                            <Link href='/profile'>
                                <Button variant="ghost">Perfil <User2Icon /></Button>
                            </Link>
                            <Button variant="ghost">Cerrar sesión <LogOutIcon /></Button>
                        </div>
                        : <div className="space-x-2 mr-5">
                            <Link href='/login'>
                                <Button variant="outline">Iniciar sesión</Button>
                            </Link>
                            <Link href='/signup'>
                                <Button>Registrarse</Button>
                            </Link>
                        </div>
                }
                <ThemeToggle />
            </div>
        </nav>
    )
}
