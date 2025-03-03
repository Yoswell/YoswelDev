interface HexagonProps {
    type: string
}

export function Hexagon({type}: HexagonProps) {
    return (
        <div className={`float-icon-${type}`}>
            <div className='cont-pad'>
                <div className='float-small'></div>
            </div>
            <div className='cont-pad'>
                <div className='float-big'>
                </div>
            </div>
            <div className='cont-pad'>
                <div className='float-medium'></div>
            </div>
        </div>
    )
}