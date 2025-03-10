import { createContext, useState } from 'react'
import { ModalCV } from '@/components/cards/ModalCV'
import { Download } from '@/components/icons/HeroIcons'

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
        <>
        <img className='Me' src='/Yo.png' alt='Me image' />
        <h1 className='title'>Hey, I'm Yoswel Badilla<br></br>a Full-Stack<br></br>Developer</h1>
        <div className='cont-big-button'>
            <button
                className='link active'
                onClick={() => handleOpenModal()}>
                <Download />
                Download CV
            </button>
            <section className="palette-sec">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </div>

        <ModalContext value={{isOpenModal, setIsOpenModal}}>
            <ModalCV/>
        </ModalContext>

        </>
    )
}