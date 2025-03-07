import { createContext, useState } from 'react'
import { ModalCV } from '@/components/cards/ModalCV'
import { Nav } from '@/components/Nav'
import { Download, Contact } from '@/components/icons/HeroIcons'
import { Grid } from '@/components/recycle/Grid'

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

            <img className='Me' src='/Yo.png' alt='Me image' />

            <h1 className='title'>Hey <span>crack</span></h1>
            <p>I'm Yoswel Badilla a Full-Stack Developer and Cybersecurity Analyst, my passion for technological innovation has led me to specialize in the development of applications that not only solve complex problems in a timely efficient manner, but also designed with a robust and secure architecture</p>
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

            <Grid />
        </header>
    )
}