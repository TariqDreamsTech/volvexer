import { TOOLS } from '../data/site';

function ToolsSection() {
    return (
        <section className="section tools section--alt" id="tools">
            <div className="container">
                <div className="section-head">
                    <span className="section-head__eyebrow">Platforms we master</span>
                    <h2 className="section-head__title">Your books, on the tools you trust</h2>
                    <p className="section-head__sub">
                        Certified across the world’s leading accounting software — or we’ll set up
                        the right cloud stack for your business.
                    </p>
                </div>

                <div className="tools__grid">
                    {TOOLS.map((t) => (
                        <div className="tool-chip" key={t.name}>
                            <i className={`fas ${t.icon}`} aria-hidden="true"></i>
                            <span>{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ToolsSection;
