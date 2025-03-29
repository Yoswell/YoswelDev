import { createContext, useState } from 'react'
import { ModalCV } from '@/components/cards/ModalCV'

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
            <div className='profile-photo'>
                <img src='/Yo.png' decoding='async' loading='lazy' alt='Profile photo' />
            </div>
            <h1 className='title text-gradient-color'>
                Hey, I'm Yoswel Badilla a Full
                <br></br>Stack Developer and
                <br></br>Pentester Junior
            </h1>
            <p className='subTitle text-gradient-color'>With experience in web applications, I focus on building efficient, scalable, and secure solutions, leveraging my skills in Cybersecurity.</p>
            <div className='cont-big-button'>
                <button
                    className='link btn btn-active'
                    onClick={() => handleOpenModal()}>
                    Preview CV
                </button>
            </div>
            <ModalContext value={{isOpenModal, setIsOpenModal}}>
                <ModalCV/>
            </ModalContext>
        </header>
    )
}