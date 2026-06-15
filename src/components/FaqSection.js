import { useState } from 'react';
import { FAQS } from '../data/site';

function FaqSection() {
    const [open, setOpen] = useState(0);

    return (
        <section className="section faq" id="faq">
            <div className="container container--narrow">
                <div className="section-head">
                    <span className="section-head__eyebrow">FAQ</span>
                    <h2 className="section-head__title">Questions, answered</h2>
                </div>

                <div className="faq__list">
                    {FAQS.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                                <button
                                    className="faq-item__q"
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.q}</span>
                                    <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true"></i>
                                </button>
                                <div className="faq-item__a">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
