import { AUTOMATIONS, whatsappLink } from '../data/site';

function AutomationSection() {
    return (
        <section className="section automation" id="automation">
            <div className="container">
                <div className="section-head">
                    <span className="section-head__eyebrow">Beyond the numbers</span>
                    <h2 className="section-head__title">We don’t just count it — we automate it</h2>
                    <p className="section-head__sub">
                        Our tech team turns slow, manual finance work into smooth automated workflows.
                        Here are a few ideas we build for clients every day.
                    </p>
                </div>

                <div className="automation__grid">
                    {AUTOMATIONS.map((a) => (
                        <article className="automation-card" key={a.title}>
                            <div className="automation-card__icon">
                                <i className={`fas ${a.icon}`} aria-hidden="true"></i>
                            </div>
                            <h3>{a.title}</h3>
                            <p>{a.text}</p>
                        </article>
                    ))}
                </div>

                <div className="automation__cta">
                    <p>Got a repetitive finance task? Tell us — chances are, we can automate it.</p>
                    <a
                        href={whatsappLink('Hi Volvexer, I have a finance process I would like to automate.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                    >
                        <i className="fas fa-wand-magic-sparkles" aria-hidden="true"></i> Get an Automation Idea
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AutomationSection;
