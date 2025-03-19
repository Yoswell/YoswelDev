import { createContext, useState } from 'react'
import { ModalCV } from '@/components/cards/ModalCV'
import { Download, Link } from '@/components/icons/HeroIcons'

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
            <span className="code-tailwind">text-8xl text-white tracking-tighter text-balance</span>
            <h1 className='title'>Hey, I'm Yoswel Badilla a Full-Stack Developer and Pentester Junior</h1>
            <span className="code-tailwind">text-lg text-white font-medium</span>
            <p className='subtitle'>I am a passionate Full-Stack Developer dedicated to creating innovative and high-performance solutions. With experience in web applications using React for the frontend and .NET for the backend, I focus on building efficient, scalable, and secure solutions, leveraging my skills in Cybersecurity.</p>
            <div className='cont-big-button'>
                <button
                    className='link active'
                    onClick={() => handleOpenModal()}>
                    <Download />
                    Download CV
                </button>
                <a className='link inactive' href="https://www.linkedin.com/in/yoswel-badilla-cyberjr" target='_blank'>
                    <Link />
                    LinkedIn
                </a>
                <a className='link empty' href='https://github.com/Yoswell' target='_blanck'>
                    <Link />
                    Github
                </a>
            </div>
            <ModalContext value={{isOpenModal, setIsOpenModal}}>
                <ModalCV/>
            </ModalContext>
        </header>
    )
}