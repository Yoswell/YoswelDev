import { createContext, useState } from 'react'
import { ModalCV } from '@/components/ModalCV'
import { Nav } from '@/components/Nav'
import { Download, Info, Contact, Arrow } from '@/components/icons/HeroIcons'

export const ModalContext = createContext({
    isOpenModal: false,
    setIsOpenModal: (_: boolean) => {}
})

export function About() {
    const [isOpenModal, setIsOpenModal] = useState(false)
    
    const handleOpenModal = () => {
        setIsOpenModal((n) => !n)
    }

    return (
        <header>
            <div className='blur1'>
                <img src='/Back.webp' alt='Circle white image background'></img>
            </div>

            <Nav/>
            <div className='status'>
                <h3>
                    <Info/>
                    Available to work immediately
                </h3>
            </div>
            <div>
                <h1>Hey, I'm Yoswel Badilla</h1>
                <div className='letter'>
                    <span>VI</span>
                    <span>SH</span>
                    <span>OK</span>
                </div>
                <p>Full-Stack Developer and Cybersecurity Analyst, my passion for technological innovation has led me to specialize in the development of applications that not only solve complex problems in a timely manner. efficient, but also designed with a robust and secure architecture</p>
            </div>
            <div className='social-media'>
                <button
                    className='link'>
                    <Contact />
                    Contact me
                </button>
                <button
                    className='link active'
                    onClick={() => handleOpenModal()}>
                    <Download />
                    Download Resume
                </button>
            </div>
            <div className='cont-line'>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ModalContext value={{isOpenModal, setIsOpenModal}}>
                <ModalCV/>
            </ModalContext>

            <div className='float-left-bottom'>
                <Arrow/>
                <h4>Scroll dowm</h4>
            </div>
            <div className='float-right-bottom'>
                <h4>Available sections</h4>
                <div className='row'>
                    <a href='#home'><span>About</span></a>
                    <a href='#experience'><span>Experience</span></a>
                    <a href='#service'><span>Service</span></a>
                    <a href='#projects'><span>Projects</span></a>
                    <a href='#stack'><span>My Stack</span></a>
                    <a href='#extras'><span>Extras</span></a>
                </div>
            </div>

            <div className='blur2'>
                <img src='/Back.webp' alt='Circle white image background'></img>
            </div>
        </header>
    )
}