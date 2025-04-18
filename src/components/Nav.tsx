import { Arrow } from "./icons/HeroIcons";

export function Nav() {
    return (
        <nav>
            <div className='row'>
                <img src="/Dev.svg" decoding="async" loading="lazy" alt="Brand logo to identify my than others" />
                <h1>Vishok</h1>
            </div>
            <div className='row'>
                <a className="anchor">Home<Arrow /></a>
                <a className="anchor">Experience<Arrow /></a>
                <a className="anchor">Services<Arrow /></a>
                <a className="anchor">Projects<Arrow /></a>
                <a className="anchor">Contact<Arrow /></a>
            </div>
            <div className="row">
                <a className="button-anchor" href="https://github.com/Yoswell" target='_blank' rel='noopener noreferrer'>GitHub</a>
                <a className="button-anchor" href="#contact" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            </div>
        </nav>
    )
}