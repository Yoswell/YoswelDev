import { createContext, useState } from 'react'
import { ModalCV } from './ModalCV';
import { Nav } from './Nav';

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
            <div className='status'>
                <h3>
                    <i className="ri-quill-pen-fill"></i>
                    Available to work immediately
                </h3>
            </div>
            <div>
                <h1>Hey, I'm Yoswel Badilla</h1>
                <p>Full-Stack Developer and Cybersecurity Analyst, my passion for technological innovation has led me to specialize in the development of applications that not only solve complex problems in a timely manner. efficient, but also designed with a robust and secure architecture</p>
            </div>
            <div className='social-media'>
                <button
                    className='link active'
                    onClick={() => handleOpenModal()}>
                    <i className="ri-download-cloud-2-line"></i>
                    Download Resume
                </button>
            </div>
            <picture className='image-about'>
                <div className='cont-image'>
                    <img src='GSpark.png'></img>
                </div>
                <div className='cont-image'>
                    <img src='DHouse.png'></img>
                </div>
                <div className='cont-image'>
                    <img src='CTimer.jpg'></img>
                </div>
            </picture>

            <ModalContext value={{isOpenModal, setIsOpenModal}}>
                <ModalCV/>
            </ModalContext>
        </header>
    )
}