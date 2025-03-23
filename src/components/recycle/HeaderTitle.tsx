import { FC } from 'react'

interface TitleProps {
    title: string
    subTitle: string
}

export const Title: FC<TitleProps> = ({title, subTitle}) => {
    return (
        <section className='title-section'>
            <span className="code-tailwind"> {"<text-4xl text-white tracking-tighter text-balance text-4xl/>"}</span>
            <h1 className='title'>{title}</h1>
            <span className="code-tailwind">{"<text-base text-white/>"}</span>
            <h4 className='subTitle'>{subTitle}</h4>
            <span className="left-span">Hey crack hire me now</span>
        </section>
    )
}