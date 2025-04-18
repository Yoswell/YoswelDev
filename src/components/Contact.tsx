import { useState } from "react"

export function Contact() {
    const [inputValue, setInputValue] = useState("")
    const [textareaValue, setTextareaValue] = useState("")

    return (
        <section className="contact-sec" id="con">
            <form action="https://formspree.io/f/xqkjlrvd" method="POST" aria-label="contact-form">
                <div className="cont-name">
                    <span className={`${inputValue.length > 0 ? "hide-span-1" : "show-span-1"}`}>Email...</span>
                    <input 
                        type="email"
                        name="email"
                        aria-label="email-input"
                        onChange={(prev) => setInputValue(prev.target.value)}>
                    </input>
                </div>
                <div className="cont-name">
                    <span className={`${textareaValue.length > 0 ? "hide-span-2" : "show-span-2"}`}>Your desired message for me...</span>
                    <textarea 
                        name="message"
                        aria-label="description-input"
                        onChange={(prev) => setTextareaValue(prev.target.value)}>
                    </textarea>
                </div>
                <div className='space-button'>
                    <button
                        className='btn btn-active'
                        type="submit">
                        <span>✈️</span>
                    </button>
                </div>
            </form>
        </section>
    )
}