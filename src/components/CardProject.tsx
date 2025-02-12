import { ReactNode } from 'react'

interface CardProjectProps {
    url: string
    title: string
    text: string
    children: ReactNode
}

export function CardProject({url, title, text, children}: CardProjectProps) {
    return (
        <article className='cont-card'>
            <div className='cardProject'>
                <picture>
                    <img src={url} alt='Project image'></img>
                </picture>
                <div className='cont-text'>
                    <h3 className='title'>
                        <i className='ri-hammer-fill'></i>
                        {title}
                    </h3>
                    <p>{text}</p>
                </div>
                <article className='cont-skill'>
                    {children}
                </article>
            </div>
        </article>
    )
}