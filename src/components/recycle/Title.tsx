export function Title(props) {
    return (
        <section className='title-section'>
            <h1 className='title'>{props.title}</h1>
            <h4 className='subTitle'>{props.subTitle}</h4>
        </section>
    )
}