import { FC } from 'react'

interface CardTextProps {
    title: string
    text: string
}

export const CardText: FC<CardTextProps> = ({title, text}) => {
    return (
        <article className='card'>
            <span>Let's check my service</span>
            <h3 className='title text-gradient-color-mm'>{title}</h3>
            <p>{text}</p>
        </article>
    )
}