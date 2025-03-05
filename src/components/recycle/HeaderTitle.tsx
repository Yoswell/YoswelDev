interface TitleProps {
    title: string
    subTitle: string
}

export function Title({title, subTitle}: TitleProps) {
    return (
        <section className='title-section'>
            <h3>Code never lies, but comments sometimes do - First, solve the problem. Then, write the code - I don’t always test my code, but when I do, I do it in production</h3>
            <h1 className='title'>{title}</h1>
            <h4 className='subTitle'>{subTitle}</h4>
        </section>
    )
}