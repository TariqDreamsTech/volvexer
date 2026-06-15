import { REGIONS } from '../data/site';

function RegionsSection() {
    return (
        <section className="section regions section--dark" id="global">
            <div className="container">
                <div className="section-head">
                    <span className="section-head__eyebrow section-head__eyebrow--light">Global reach</span>
                    <h2 className="section-head__title">Tax &amp; accounting, wherever you are</h2>
                    <p className="section-head__sub section-head__sub--light">
                        From Karachi to New York to Sydney — we keep individuals and businesses
                        compliant across borders, in every major jurisdiction.
                    </p>
                </div>

                <div className="regions__grid">
                    {REGIONS.map((r) => (
                        <article className="region-card" key={r.country}>
                            <span className="region-card__flag" aria-hidden="true">{r.flag}</span>
                            <div>
                                <h3 className="region-card__country">{r.country}</h3>
                                <p className="region-card__note">{r.note}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="regions__foot">
                    <i className="fas fa-earth-americas" aria-hidden="true"></i>
                    Operating in another country? We serve international clients worldwide.
                </p>
            </div>
        </section>
    );
}

export default RegionsSection;
