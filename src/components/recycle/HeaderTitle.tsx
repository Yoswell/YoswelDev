import { FC } from 'react'

interface TitleProps {
    tag: string
    title: string
    subTitle: string
}

export const Title: FC<TitleProps> = ({tag, title, subTitle}) => {
    return (
        <section className='title-section'>
            <span className={`tag-sec tag-sec-${tag}`}></span>
            <h1 className='title'>{title}</h1>
            <h4 className='subTitle text-gradient-color-ms'>{subTitle}</h4>
        </section>
    )
}