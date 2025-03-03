interface CardAudioProps {
    title: string
    subTitle: string
}

export function CardSkills({ title, subTitle }: CardAudioProps) {
    return (
        <div className='cardSoftSkill'>
            <img src="/darkIcons.webp" alt="Image to audio"></img>
            <div className='row'>
                <h4>{title}</h4>
                <h6>{subTitle}</h6>
            </div>
        </div>
    );
}
