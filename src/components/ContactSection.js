import { CONTACT, whatsappLink } from '../data/site';

function ContactSection() {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact__card">
                    <div className="contact__info">
                        <h2>Ready to sort out your taxes &amp; books?</h2>
                        <p>
                            Tell us a little about your needs and our team will get back to you with a
                            clear, no-obligation quote. Most clients hear back within the hour.
                        </p>
                        <div className="contact__methods">
                            <a className="contact__method" href={`tel:${CONTACT.phone}`}>
                                <i className="fas fa-phone" aria-hidden="true"></i>
                                <span>
                                    <strong>Call us</strong>
                                    {CONTACT.phoneDisplay}
                                </span>
                            </a>
                            <a className="contact__method" href={`mailto:${CONTACT.email}`}>
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                                <span>
                                    <strong>Email us</strong>
                                    {CONTACT.email}
                                </span>
                            </a>
                            <a
                                className="contact__method"
                                href={whatsappLink('Hi Volvexer, I would like to get started.')}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                <span>
                                    <strong>WhatsApp</strong>
                                    Instant support
                                </span>
                            </a>
                        </div>
                    </div>

                    <form
                        className="contact__form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = new FormData(e.target);
                            const msg = `Hi Volvexer, I'm ${data.get('name') || ''}. ${data.get('message') || ''} (Email: ${data.get('email') || ''})`;
                            window.open(whatsappLink(msg), '_blank', 'noopener');
                        }}
                    >
                        <h3>Request a callback</h3>
                        <div className="form-field">
                            <label htmlFor="c-name">Your name</label>
                            <input id="c-name" name="name" type="text" placeholder="e.g. Ali Khan" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="c-email">Email</label>
                            <input id="c-email" name="email" type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="c-message">How can we help?</label>
                            <textarea id="c-message" name="message" rows="4" placeholder="Tell us about your tax or accounting needs"></textarea>
                        </div>
                        <button type="submit" className="btn btn--primary btn--block">
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                            Send via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
