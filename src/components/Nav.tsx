import { Contact, Link } from '@/components/icons/HeroIcons'

export function Nav() {
    return (
        <nav>
            <ul className='ul-brand'>
                <h1>Vishok</h1>
            </ul>
            <ul className='ul-links'>
                <a href='#contact'>
                    <Contact/>
                    Contact
                </a>
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