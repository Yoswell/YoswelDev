import { Contact, Link } from '@/components/icons/HeroIcons'

export function Nav() {
    return (
        <nav>
            <ul className='navigate-link'>
                <h1>Vishok</h1>
                <a className='link' href="#home">About</a>
                <a className='link' href="#">Experience</a>
                <a className='link' href="#">Services</a>
                <a className='link' href="#">Projects</a>
            </ul>
            <ul>
                <button>
                    <Contact/>
                    Contact
                </button>
                <a href="https://www.linkedin.com/in/yoswel-badilla-cyberjr" target='_blank'>
                    <Link/>
                    LinkedIn
                </a>
                <a href="https://github.com/Yoswell" target='_blank'>
                    <Link/>
                    GitHub
                </a>
            </ul>
        </nav>
    )
}