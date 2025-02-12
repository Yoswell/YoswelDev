export function CardText(props) {
    return (
        <article className='cont-card'>
            <div className='card'>
                <h3 className='title'>
                    <i className='ri-mickey-fill'></i>
                    {props.title}
                </h3>
                <p>{props.text}</p>
            </div>
        </article>
    )
}