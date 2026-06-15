import { Link } from 'react-router-dom';
import { CONTACT, whatsappLink } from '../data/site';

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container footer__grid">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <img src="/static/assets/final icon 1.png" alt="Volvexer logo" width="34" height="34" />
                        <span>VOLVEXER</span>
                    </div>
                    <p>
                        Trusted tax filing, accounting and bookkeeping for individuals and
                        businesses across Pakistan.
                    </p>
                </div>

                <div className="footer__col">
                    <h4>Services</h4>
                    <ul>
                        <li><Link to="/taxation">Tax Filing & Taxation</Link></li>
                        <li><Link to="/accounting">Accounting & Bookkeeping</Link></li>
                        <li><Link to="/taxation#calculator">Income Tax Calculator</Link></li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/#team">Our Team</a></li>
                        <li><a href="/#why">Why Volvexer</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>Get in Touch</h4>
                    <ul>
                        <li><a href={`tel:${CONTACT.phone}`}><i className="fas fa-phone" aria-hidden="true"></i> {CONTACT.phoneDisplay}</a></li>
                        <li><a href={`mailto:${CONTACT.email}`}><i className="fas fa-envelope" aria-hidden="true"></i> {CONTACT.email}</a></li>
                        <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Volvexer. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
