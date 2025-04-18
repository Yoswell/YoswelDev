import { FC } from 'react'
import { Arrow } from '../icons/HeroIcons'

interface CardTextProps {
    title: string
    text: string
}

export const CardText: FC<CardTextProps> = ({title, text}) => {
    return (
        <article className='card-text'>
            <span className='tag'>Service</span>
            <h3 className='title text-gradient-color-mm'>{title}</h3>
            <p>{text}</p>
            <a className='hire-anchor'><Arrow /></a>
        </article>
    )
}