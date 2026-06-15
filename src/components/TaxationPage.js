import SEO from './SEO';
import PageHero from './PageHero';
import TaxCalculator from './TaxCalculator';
import WhyChooseUs from './WhyChooseUs';
import CtaBand from './CtaBand';
import ContactSection from './ContactSection';

const TAX_SERVICES = [
    { icon: 'fa-file-invoice-dollar', title: 'Income Tax Filing', text: 'Return preparation and filing for individuals and businesses across FBR, IRS, ATO and HMRC.' },
    { icon: 'fa-flag-usa', title: 'US Tax (IRS)', text: 'Form 1040 & 1120 preparation, sales tax and US GAAP-aligned compliance for individuals and companies.' },
    { icon: 'fa-globe', title: 'Australia & UK Tax', text: 'ATO income tax returns, BAS & GST for Australia, plus HMRC Self Assessment and VAT for the UK.' },
    { icon: 'fa-magnifying-glass-chart', title: 'Tax Planning & Advisory', text: 'Strategic, legal planning to minimise liability and maximise savings across jurisdictions.' },
    { icon: 'fa-gavel', title: 'Tax Resolution & Audit', text: 'Expert representation and support for audits, notices and disputes with any tax authority.' },
    { icon: 'fa-id-card', title: 'Registration & Returns', text: 'NTN, EIN and TFN registration, plus accurate annual returns and refund recovery.' },
];

const STEPS = [
    { n: '01', title: 'Send your details', text: 'Share your income documents over WhatsApp or email — it takes minutes.' },
    { n: '02', title: 'We prepare your return', text: 'Certified consultants compute your tax and prepare your FBR forms.' },
    { n: '03', title: 'Filed & confirmed', text: 'We submit to FBR and send you confirmation — often within the same day.' },
];

function TaxationPage() {
    return (
        <>
            <SEO
                title="International Tax Filing & Taxation Services | Volvexer"
                description="Income tax filing, planning and audit support across FBR (Pakistan), IRS (USA), ATO (Australia) and HMRC (UK). Certified consultants for individuals, expats and businesses worldwide."
                path="/taxation"
            />
            <main>
                <PageHero
                    eyebrow="Tax Filing & Taxation"
                    title="File your taxes with confidence — anywhere"
                    subtitle="Income tax filing, planning and audit support across Pakistan, the USA, Australia, the UK and beyond. Certified consultants handle the paperwork — you stay compliant and stress-free."
                    ctaMessage="Hi Volvexer, I'd like help filing my income tax return."
                />

                <section className="section" id="service-list">
                    <div className="container">
                        <div className="section-head">
                            <span className="section-head__eyebrow">What we offer</span>
                            <h2 className="section-head__title">Complete taxation services</h2>
                            <p className="section-head__sub">Everything you need to stay on the right side of FBR — and keep more of what you earn.</p>
                        </div>
                        <div className="cards-grid">
                            {TAX_SERVICES.map((s) => (
                                <article className="info-card" key={s.title}>
                                    <div className="info-card__icon"><i className={`fas ${s.icon}`} aria-hidden="true"></i></div>
                                    <h3>{s.title}</h3>
                                    <p>{s.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <TaxCalculator />

                <section className="section section--alt">
                    <div className="container">
                        <div className="section-head">
                            <span className="section-head__eyebrow">How it works</span>
                            <h2 className="section-head__title">Filing in three easy steps</h2>
                        </div>
                        <div className="steps">
                            {STEPS.map((s) => (
                                <div className="step" key={s.n}>
                                    <span className="step__num">{s.n}</span>
                                    <h3>{s.title}</h3>
                                    <p>{s.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <WhyChooseUs />
                <CtaBand />
                <ContactSection />
            </main>
        </>
    );
}

export default TaxationPage;
