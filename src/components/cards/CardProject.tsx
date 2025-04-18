import { ReactNode, FC } from 'react'

interface CardProjectProps {
    url: string
    className: string
    title: string
    text: string
    children1: ReactNode
}

export const CardProject: FC<CardProjectProps> = ({url, className, title, text, children1}) => {
    return (
        <article className={`card-project ${className}`}>
            <span className='tag'>Project</span>
            <h3 className='title'>{title}</h3>
            <p>{text}</p>
            <article className='cont-links'>
                {children1}
            </article>
            <div className='cont-image-project'>
                <img src={url} decoding='async' alt='Image to show how to see the project' />
            </div>
        </article>
    )
}