import { useContext, useState } from 'react'
import { ModalContext } from '@/components/About'

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
                <h5>
                    <i className="ri-survey-line"></i>
                    Download my resume
                </h5>
                <div className='modal-question'>
                    <label>Choose a sector</label>
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
                                    {areaResumen === 1 && <i className="ri-check-line"></i>}
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
                                    {areaResumen === 2 && <i className="ri-check-line"></i>}
                                </label>
                            </div>
                            <label>Develop</label>
                        </div>
                    </div>
                </div>
                
                {areaResumen != 0 && (
                    <div className='modal-question'>
                        <label>Choose a lenguaje</label>
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
                                        {idiomResume === 1 && <i className="ri-check-line"></i>}
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
                                        {idiomResume === 2 && <i className="ri-check-line"></i>}
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
                            href='/src/assets/CV_YoswelBCyber_En.pdf'
                            download='CV_YoswelBCyber_En.pdf'>
                            Download
                        </a>
                    )}
                    {areaResumen === 1 && idiomResume === 2 && (
                        <a 
                            className='btn'
                            href='/src/assets/CV_YoswelBCyber_Es.pdf'
                            download='CV_YoswelBCyber_Es.pdf'>
                            Download
                        </a>
                    )}
                    {areaResumen === 2 && idiomResume === 1 && (
                        <a 
                            className='btn'
                            href='/src/assets/CV_YoswelBDev_En.pdf'
                            download='CV_YoswelBDev_En.pdf'>
                            Download
                        </a>
                    )}
                    {areaResumen === 2 && idiomResume === 2 && (
                        <a 
                            className='btn'
                            href='/src/assets/CV_YoswelBDev_Es.pdf'
                            download='CV_YoswelBDev_Es.pdf'>
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