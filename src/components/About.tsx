import { createContext, useState } from 'react'
import { ModalCV } from '@/components/cards/ModalCV'
import { Bolt } from '@/components/icons/HeroIcons'

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
            <h5><Bolt /> Available to work</h5>
            <h1 className='title'>
                Yoswel vishok Badilla
                <br></br>Developer and
                <br></br>Pentester 
            </h1>
            <div className='space-button'>
                <button
                    className='btn btn-active'
                    onClick={() => handleOpenModal()}>
                    <span>📂</span>
                </button>
            </div>
            <ModalContext value={{isOpenModal, setIsOpenModal}}>
                <ModalCV/>
            </ModalContext>
        </header>
    )
}