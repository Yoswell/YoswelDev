import { useContext, useState } from 'react'
import { ModalContext } from '@/components/About'
import { Check, Download } from '@/components/icons/HeroIcons'

export function ModalCV() {
    const { isOpenModal, setIsOpenModal } = useContext(ModalContext)
    const [areaResumen, setAreaResume] = useState(0)
    const [idiomResume, setIdiomResume] = useState(0)

    const handleCloseModal = () => {
        setIsOpenModal(false)
        setAreaResume(0)
        setIdiomResume(0)
    }

    const handleAreaResume = (id: number) => {
        setAreaResume(id)
    }

    const handleIdiomResume = (id: number) => {
        setIdiomResume(id)
    }

    return (
        <section className={`modal ${isOpenModal && "modal-open"}`}>
            <div className='card-modal'>
                <h5><Download/>Download my resume</h5>
                
                <div className='modal-question'>
                    <h6>Choose a sector</h6>
                    <div className='form-group'>
                        <div className='row'>
                            <input
                                type='checkbox'
                                id='cyber_cv'
                                name='cyber_cv'
                                hidden
                                onChange={() => handleAreaResume(1)}>
                            </input>
                            <div className="row">
                                <label htmlFor='cyber_cv' className='select'>
                                    {areaResumen === 1 && <Check/>}
                                </label>
                            </div>
                            <label>Cibersecurity</label>
                        </div>
                        <div className='row'>
                            <input
                                type='checkbox'
                                id='dev_cv'
                                name='dev_cv'
                                hidden
                                onChange={() => handleAreaResume(2)}>
                            </input>
                            <div className="row">
                                <label htmlFor='dev_cv' className='select'>
                                    {areaResumen === 2 && <Check/>}
                                </label>
                            </div>
                            <label>Develop</label>
                        </div>
                    </div>
                </div>
                
                {areaResumen != 0 && (
                    <div className='modal-question'>
                        <h6>Choose a lenguaje</h6>
                        <div className='form-group'>
                            <div className='row'>
                                <input
                                    type='checkbox'
                                    id='cv_english'
                                    name='cv_english'
                                    hidden
                                    onChange={() => handleIdiomResume(1)}>
                                </input>
                                <div className="row">
                                    <label htmlFor='cv_english' className='select'>
                                        {idiomResume === 1 && <Check/>}
                                    </label>
                                </div>
                                <label>English</label>
                            </div>
                            <div className='row'>
                                <input
                                    type='checkbox'
                                    id='cv_spanish'
                                    name='cv_spanish'
                                    hidden
                                    onChange={() => handleIdiomResume(2)}>
                                </input>
                                <div className="row">
                                    <label htmlFor='cv_spanish' className='select'>
                                        {idiomResume === 2 && <Check/>}
                                    </label>
                                </div>
                                <label>Spanish</label>
                            </div>
                        </div>
                    </div>
                )}

                <div className='cont-button'>
                    {areaResumen === 1 && idiomResume === 1 && (
                        <a 
                            className='btn'
                            href='/src/assets/CV_YoswelCyber_En.pdf'
                            download='CV_YoswelCyber_En.pdf'>
                            Download
                        </a>
                    )}
                    {areaResumen === 1 && idiomResume === 2 && (
                        <a 
                            className='btn'
                            href='/src/assets/CV_YoswelCyber_Es.pdf'
                            download='CV_YoswelCyber_Es.pdf'>
                            Download
                        </a>
                    )}
                    {areaResumen === 2 && idiomResume === 1 && (
                        <a 
                            className='btn'
                            href='/src/assets/CV_YoswelDev_En.pdf'
                            download='CV_YoswelDev_En.pdf'>
                            Download
                        </a>
                    )}
                    {areaResumen === 2 && idiomResume === 2 && (
                        <a 
                            className='btn'
                            href='/src/assets/CV_YoswelDev_Es.pdf'
                            download='CV_YoswelDev_Es.pdf'>
                            Download
                        </a>
                    )}
                    <button 
                        className='btn'
                        onClick={() => handleCloseModal()}>
                        Close
                    </button>
                </div>
            </div>
        </section>
    )
}