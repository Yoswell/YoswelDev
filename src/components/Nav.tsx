import { Contact, Link } from '@/components/icons/HeroIcons'

export function Nav() {
    return (
        <nav>
            <h1>Vishok</h1>
            <div className='nav-links'>
                <a href='#contact'>
                    <Contact/>Contact
                </a>
                <a href="https://www.linkedin.com/in/yoswel-badilla-cyberjr" target='_blank' rel='noopener noreferrer'>
                    <Link/>LinkedIn
                </a>
                <a className='active' href="https://github.com/Yoswell" target='_blank' rel='noopener noreferrer'>
                    <Link/>GitHub
                </a>
            </div>
        </nav>
    )
}