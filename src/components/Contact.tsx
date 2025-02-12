export function Contact() {
    return (
        <section className="contact">
            <form action="https://formspree.io/f/xqkjlrvd" method="POST">
                <input 
                    type="email"
                    name="email"
                    className="contact-input"
                    placeholder="Email">
                </input>
                <textarea 
                    name="message"
                    className="contact-input"
                    placeholder="Description">
                </textarea>
                <div className="cont-button">
                    <button type="submit" className="btn submit">Enviar</button>
                </div>
            </form>
        </section>
    )
}