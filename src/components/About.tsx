import { createContext, useState } from 'react'
import { ModalCV } from '@/components/ModalCV'
import { Nav } from '@/components/Nav'
import { Download, Contact, Arrow } from '@/components/icons/HeroIcons'

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
                <img src='/Back.webp' alt='Circle white image background' />
            </div>

            <Nav/>
            <div className='brand'>
                <img src='/CTimer.jpg' alt='Me image' />
                <img src='/GSpark2.jpg' alt='Me image' />
                <img src='/Vishok.png' alt='Me image' />
                <img src='/MLearn.jpg' alt='Me image' />
                <img src='/DHouse.png' alt='Me image' />
            </div>
            <h1>Hey crack, what happen?</h1>
            <p>I'm Yoswel Badilla a Full-Stack Developer and Cybersecurity Analyst, my passion for technological innovation has led me to specialize in the development of applications that not only solve complex problems in a timely manner. efficient, but also designed with a robust and secure architecture</p>
            <div className='cont-big-button'>
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

            <ModalContext value={{isOpenModal, setIsOpenModal}}>
                <ModalCV/>
            </ModalContext>

            <div className='float-left-bottom'>
                <Arrow/>
                <h4>Scroll Dowm</h4>
            </div>
            <div className='float-right-bottom'>
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
                <img src='/Back.webp' alt='Circle white image background' />
            </div>
        </header>
    )
}