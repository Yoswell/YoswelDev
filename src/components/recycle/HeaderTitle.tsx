import { FC } from 'react'

interface TitleProps {
    title: string
    subTitle: string
}

export const Title: FC<TitleProps> = ({title, subTitle}) => {
    return (
        <section className='title-section'>
            <h1 className='title'>{title}</h1>
            <h4 className='subTitle text-gradient-color'>{subTitle}</h4>
        </section>
    )
}