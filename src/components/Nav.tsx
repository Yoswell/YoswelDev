export function Nav() {
    return (
        <nav>
            <div className="row">
                <img src="/Dev.svg" decoding="async" loading="lazy" alt="Brand logo to identify my than others" />
                <h1>Vishok</h1>
            </div>
            <div className='nav-links'>
                <a className="hide" href='#contact'>Experience</a>
                <a className="hide" href='#contact'>Service</a>
                <a className="hide" href='#contact'>Project</a>
                <a href="https://www.linkedin.com/in/yoswel-badilla-cyberjr" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                <a className="hide" href="https://github.com/Yoswell" target='_blank' rel='noopener noreferrer'>GitHub</a>
                <a className="active" href='#contact'>Contact</a>
            </div>
        </nav>
    )
}