import { WHY_CHOOSE_US } from '../data/site';

function WhyChooseUs() {
    return (
        <section className="section why" id="why">
            <div className="container">
                <div className="section-head">
                    <span className="section-head__eyebrow">Why Volvexer</span>
                    <h2 className="section-head__title">A partner you can rely on</h2>
                    <p className="section-head__sub">
                        Hundreds of clients trust us with their most sensitive financial work.
                        Here’s why they stay.
                    </p>
                </div>

                <div className="why__grid">
                    {WHY_CHOOSE_US.map((item) => (
                        <div className="why-card" key={item.title}>
                            <div className="why-card__icon">
                                <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
