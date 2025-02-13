import { Collection } from '@/components/icons/HeroIcons'

interface CardTextProps {
    title: string
    text: string
}

export function CardText({title, text}: CardTextProps) {
    return (
        <article className='cont-card'>
            <div className='card'>
                <h3 className='title'>
                    <div className='raimbow'>
                        <Collection/>
                    </div>
                    {title}
                </h3>
                <p>{text}</p>
            </div>
        </article>
    )
}