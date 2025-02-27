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
            <Nav/>
            <article className='cardAds'>
                <img src='/OIG4.webp' alt='Grizzly image' />
                <div>
                    <h3>Grizzly Spark Tool</h3>
                    <h5>A powerful tool written in Python designed to assist in CTFs</h5>
                </div>
                <Arrow/>
            </article>
            <div>
                <h1 className='title'>Hey I'm Yoswel Badilla</h1>
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

            <div className='left-float-cards'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className='right-float-cards'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}