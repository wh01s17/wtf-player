import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    const fecha = new Date()
    const year = fecha.getFullYear()

    return (
        <footer className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center text-base pt-10 pb-5'>
                <p>Hecho en Chile con 💚</p>
                <p><Link href="https://wh01s17.vercel.app/"
                    rel="noreferer"
                    target="_blank"
                    className="duration-300 hover:brightness-50"
                >wh01s17</Link>© {year}</p>
            </div>
        </footer>
    )
}
