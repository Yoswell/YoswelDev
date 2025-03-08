import { ReactNode } from 'react'
import { Idea } from '@/components/icons/HeroIcons'

interface CardProjectProps {
    url: string
    title: string
    text: string
    children1: ReactNode
    children2: ReactNode
}

export function CardProject({url, title, text, children1, children2}: CardProjectProps) {
    return (
        <article className='cont-card'>
            <div className='cardProject'>
                <img src={url} alt='Project image'></img>
                <div className='cont-text'>
                    <div>
                        <div className='raimbow'>
                            <Idea/>
                        </div>
                        <h3 className='title'>{title}</h3>
                    </div>
                    <p>{text}</p>
                </div>
                <article className='cont-links'>
                    {children1}
                </article>
                <article className='cont-skills'>
                    {children2}
                </article>
            </div>
        </article>
    )
}