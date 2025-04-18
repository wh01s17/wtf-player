import React from 'react'

export const Container = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className='p-20 flex'>
            {children}
        </div>
    )
}
