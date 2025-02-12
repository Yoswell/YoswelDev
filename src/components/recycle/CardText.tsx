interface CardTextProps {
    title: string
    text: string
}

export function CardText({title, text}: CardTextProps) {
    return (
        <article className='cont-card'>
            <div className='card'>
                <h3 className='title'>
                    <i className='ri-mickey-fill'></i>
                    {title}
                </h3>
                <p>{text}</p>
            </div>
        </article>
    )
}