export function Nav() {
    return (
        <nav>
            <div className="row">
                <img src="/Dev.svg" decoding="async" loading="lazy" alt="Brand logo to identify my than others" />
                <h1>Vishok</h1>
            </div>
            <div className='nav-links'>
                <a href="https://www.linkedin.com/in/yoswel-badilla-cyberjr" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                <a className="hide" href="https://github.com/Yoswell" target='_blank' rel='noopener noreferrer'>GitHub</a>
                <a className="active" href='#con'>Contact</a>
            </div>
        </nav>
    )
}