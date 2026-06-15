import { Link } from 'react-router-dom';
import { STATS, whatsappLink } from '../data/site';

function HomeHero() {
    return (
        <section className="hero" id="home">
            <div className="hero__glow" aria-hidden="true"></div>
            <div className="container hero__inner">
                <div className="hero__content">
                    <span className="hero__eyebrow">
                        <i className="fas fa-earth-americas" aria-hidden="true"></i>
                        Tax & accounting experts — Pakistan, USA, Australia &amp; beyond
                    </span>
                    <h1 className="hero__title">
                        Taxes filed. Books balanced.
                        <span className="hero__title-accent"> Borders crossed.</span>
                    </h1>
                    <p className="hero__subtitle">
                        Volvexer handles income tax filing, accounting and bookkeeping end-to-end for
                        individuals and businesses — across <strong>FBR, IRS, ATO and HMRC</strong> — so you
                        stay compliant in every country you operate in.
                    </p>
                    <div className="hero__actions">
                        <Link to="/taxation" className="btn btn--primary btn--lg">
                            <i className="fas fa-file-invoice-dollar" aria-hidden="true"></i>
                            File Your Tax Return
                        </Link>
                        <a
                            href={whatsappLink('Hi Volvexer, I would like a free consultation.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--ghost btn--lg"
                        >
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                            Free Consultation
                        </a>
                    </div>

                    <div className="hero__stats">
                        {STATS.map((s) => (
                            <div className="hero__stat" key={s.label}>
                                <span className="hero__stat-num">{s.number}</span>
                                <span className="hero__stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero__card" aria-hidden="true">
                    <div className="hero__card-head">
                        <span className="hero__card-dot"></span>
                        <span>Tax Return — FY 2025-2026</span>
                    </div>
                    <ul className="hero__card-list">
                        <li><i className="fas fa-check"></i> Income & deductions reviewed</li>
                        <li><i className="fas fa-check"></i> FBR forms auto-prepared</li>
                        <li><i className="fas fa-check"></i> Filed & confirmed</li>
                    </ul>
                    <div className="hero__card-progress">
                        <div className="hero__card-bar"></div>
                    </div>
                    <div className="hero__card-foot">
                        <span>Status</span>
                        <strong className="hero__card-status">Filed ✓</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
