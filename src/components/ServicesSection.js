import { Link } from 'react-router-dom';
import { SERVICES } from '../data/site';

function ServicesSection() {
    return (
        <section className="section services" id="services">
            <div className="container">
                <div className="section-head">
                    <span className="section-head__eyebrow">What we do</span>
                    <h2 className="section-head__title">Two services, done exceptionally well</h2>
                    <p className="section-head__sub">
                        We focus on what matters most for your finances — taxation and accounting —
                        and deliver both with precision and care.
                    </p>
                </div>

                <div className="services__grid">
                    {SERVICES.map((s) => (
                        <article className="service-card" key={s.slug}>
                            <div className="service-card__icon">
                                <i className={`fas ${s.icon}`} aria-hidden="true"></i>
                            </div>
                            <h3 className="service-card__title">{s.title}</h3>
                            <p className="service-card__tagline">{s.tagline}</p>
                            <p className="service-card__desc">{s.description}</p>
                            <ul className="service-card__features">
                                {s.features.map((f) => (
                                    <li key={f}><i className="fas fa-check" aria-hidden="true"></i> {f}</li>
                                ))}
                            </ul>
                            <Link to={`/${s.slug}`} className="service-card__link">
                                Explore service <i className="fas fa-arrow-right" aria-hidden="true"></i>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
