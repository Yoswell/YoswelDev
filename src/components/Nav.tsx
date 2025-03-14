import { Contact, Link } from '@/components/icons/HeroIcons'

export function Nav() {
    return (
        <nav>
            <ul>
                <button>
                    <Contact/>
                    Contact
                </button>
                <a href="https://www.linkedin.com/in/yoswel-badilla-cyberjr" target='_blank'>
                    <Link/>
                    LinkedIn
                </a>
                <a className='active' href="https://github.com/Yoswell" target='_blank'>
                    <Link/>
                    GitHub
                </a>
            </ul>
        </nav>
    )
}