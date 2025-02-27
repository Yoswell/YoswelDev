interface CardServiceProps {
    title: string
    image: string
}

export function CardService({ title, image }: CardServiceProps) {
    return (
        <div className="cardService">
            <div className='row'>
                <h4>{title}</h4>
            </div>
            <div className='cont-image'>
                <img src={image} alt="Image to card"></img>
                <div className="float-div-left"></div>
                <div className="float-div-right"></div>
            </div>
        </div>
    );
}
