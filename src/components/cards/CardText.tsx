import { Idea } from '@/components/icons/HeroIcons'

interface CardTextProps {
    title: string
    text: string
}

export function CardText({title, text}: CardTextProps) {
    return (
        <article className='card'>
            <div className='cont-text'>
                <div className='raimbow'>
                    <Idea />
                </div>
                <h3 className='title'>{title}</h3>
            </div>
            <p>{text}</p>
        </article>
    )
}