export function Nav() {
    return (
        <nav>
            <div className='row'>
                <i className='anchor ri-bard-fill'></i>
                <h1>Vishok</h1>
            </div>
            <div>
                <ul>
                    <button>
                        <i className="ri-mail-send-line"></i>
                        Contact
                    </button>
                    <a href="https://www.linkedin.com/in/yoswel-badilla-cyberjr">
                        <i className='ri-linkedin-fill'></i>
                        LinkedIn
                    </a>
                    <a href="https://github.com/Yoswell">
                        <i className='ri-github-fill'></i>
                        GitHub
                    </a>
                </ul>
            </div>
        </nav>
    )
}