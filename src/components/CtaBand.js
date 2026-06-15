import { whatsappLink } from '../data/site';

function CtaBand() {
    return (
        <section className="cta-band">
            <div className="container cta-band__inner">
                <div>
                    <h2>Ready to go global without the tax headache?</h2>
                    <p>Talk to a Volvexer specialist today — free consultation, clear pricing, no obligation.</p>
                </div>
                <a
                    href={whatsappLink('Hi Volvexer, I would like a free consultation.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--lg cta-band__btn"
                >
                    <i className="fab fa-whatsapp" aria-hidden="true"></i> Book a Free Consultation
                </a>
            </div>
        </section>
    );
}

export default CtaBand;
