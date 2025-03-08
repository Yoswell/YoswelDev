interface SocialMediaCardProps {
    url: string
    src: string
    title: string
    text: string
}

export function SocialMediaCard({url, src, title, text}: SocialMediaCardProps) {
    return (
        <a className="socialCard" href={url} target="_blanck">
            <img className="banner-image" src={src} alt="Banner that I use in me social medias" />
            <div className="cont-text">
                <div className="me-back">
                    <img className="me" src="/Yo.png" alt="Me profile photo" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </a>
    )
}