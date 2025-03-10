interface TitleProps {
    title: string
    subTitle: string
}

export function Title({title, subTitle}: TitleProps) {
    return (
        <section className='title-section'>
            <h1 className='title'>{title}</h1>
            <h4 className='subTitle'>{subTitle}</h4>
            <span>Hey crack hire me now</span>
        </section>
    )
}