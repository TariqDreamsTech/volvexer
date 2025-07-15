import React from 'react';

function ContactSection() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>Get in touch with our expert team and discover how we can help you achieve your business goals.</p>
                        <div className="contact-methods">
                            <div className="contact-method">
                                <i className="fas fa-phone"></i>
                                <h4>Call Us</h4>
                                <p>+923390625000</p>
                            </div>
                            <div className="contact-method">
                                <i className="fas fa-envelope"></i>
                                <h4>Email Us</h4>
                                <p>info@volvexer.site</p>
                            </div>
                            <div className="contact-method">
                                <i className="fab fa-whatsapp"></i>
                                <h4>WhatsApp</h4>
                                <p>Get instant support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection; 