import { ReactNode, FC } from 'react'

interface CardProjectProps {
    className: string
    title: string
    text: string
    children1: ReactNode
    children2: ReactNode
}

export const CardProject: FC<CardProjectProps> = ({className, title, text, children1, children2}) => {
    return (
        <article className={`cardProject ${className}`}>
            <div className='cont-text'>
                <h3 className='title'>{title}</h3>
                <p>{text}</p>
            </div>
            <article className='cont-links'>
                {children1}
            </article>
            {children2}
        </article>
    )
}