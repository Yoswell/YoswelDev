import { Contact, Link, Volt } from '@/components/icons/HeroIcons'

export function Nav() {
    return (
        <nav>
            <div className='row'>
                <Volt/>
                <h1>Vishok</h1>
            </div>
            <div>
                <ul>
                    <button>
                        <Contact/>
                        Contact
                    </button>
                    <a href="https://www.linkedin.com/in/yoswel-badilla-cyberjr">
                        <Link/>
                        LinkedIn
                    </a>
                    <a href="https://github.com/Yoswell">
                        <Link/>
                        GitHub
                    </a>
                </ul>
            </div>
        </nav>
    )
}