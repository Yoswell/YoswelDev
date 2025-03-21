import { useState } from "react"

export function Contact() {
    const [inputValue, setInputValue] = useState("")
    const [textareaValue, setTextareaValue] = useState("")

    return (
        <section className="contact-sec" id="contact">
            <form action="https://formspree.io/f/xqkjlrvd" method="POST">
                <div className="cont-name">
                    <span className={`${inputValue.length > 0 ? "hide-span-1" : "show-span-1"}`}>Email...</span>
                    <input 
                        type="email"
                        name="email"
                        className="contact-input"
                        onChange={(prev) => setInputValue(prev.target.value)}>
                    </input>
                </div>
                <div className="cont-name">
                    <span className={`${textareaValue.length > 0 ? "hide-span-2" : "show-span-2"}`}>Your desired message for me...</span>
                    <textarea 
                        name="message"
                        className="contact-input"
                        onChange={(prev) => setTextareaValue(prev.target.value)}>
                    </textarea>
                </div>
                <div className="cont-button">
                    <button type="submit" className="btn btn-active">Send mail</button>
                </div>
            </form>
        </section>
    )
}