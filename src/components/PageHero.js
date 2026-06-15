import { whatsappLink } from '../data/site';

function PageHero({ eyebrow, title, subtitle, ctaLabel = 'Get a Free Quote', ctaMessage }) {
    return (
        <section className="page-hero">
            <div className="page-hero__glow" aria-hidden="true"></div>
            <div className="container page-hero__inner">
                {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}
                <h1 className="page-hero__title">{title}</h1>
                <p className="page-hero__subtitle">{subtitle}</p>
                <div className="page-hero__actions">
                    <a
                        href={whatsappLink(ctaMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary btn--lg"
                    >
                        <i className="fab fa-whatsapp" aria-hidden="true"></i> {ctaLabel}
                    </a>
                    <a href="#service-list" className="btn btn--ghost btn--lg">
                        See services <i className="fas fa-arrow-down" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default PageHero;
