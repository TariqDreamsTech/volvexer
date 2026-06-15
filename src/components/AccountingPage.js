import SEO from './SEO';
import PageHero from './PageHero';
import ToolsSection from './ToolsSection';
import WhyChooseUs from './WhyChooseUs';
import CtaBand from './CtaBand';
import ContactSection from './ContactSection';

const ACCOUNTING_SERVICES = [
    { icon: 'fa-cloud', title: 'Cloud Bookkeeping', text: 'Daily recording and bank reconciliation on QuickBooks, Xero and MYOB — tidy, audit-ready ledgers.' },
    { icon: 'fa-chart-line', title: 'IFRS / US GAAP Reporting', text: 'Clear financial statements under IFRS or US GAAP, cash-flow analysis and decision-ready insights.' },
    { icon: 'fa-file-invoice', title: 'Accounts Payable / Receivable', text: 'Vendor payments, customer invoicing and tight payment tracking across currencies.' },
    { icon: 'fa-calculator', title: 'Payroll Processing', text: 'Accurate multi-country payroll, tax deductions and on-time reporting for your team.' },
    { icon: 'fa-shield-halved', title: 'Compliance & Audit', text: 'Stay regulation-ready in every jurisdiction and fully prepared for financial audits.' },
    { icon: 'fa-user-tie', title: 'Virtual CFO & Advisory', text: 'Strategic, CFO-level guidance on budgeting, forecasting and growth — on demand.' },
];

const STEPS = [
    { n: '01', title: 'Share your books', text: 'Send us your existing records or start fresh — we’ll take it from there.' },
    { n: '02', title: 'We organise & reconcile', text: 'Our team sets up clean ledgers and reconciles every account.' },
    { n: '03', title: 'Monthly reporting', text: 'Receive clear statements and insights, every month, on time.' },
];

function AccountingPage() {
    return (
        <>
            <SEO
                title="International Accounting & Bookkeeping Services | Volvexer"
                description="Cloud bookkeeping, payroll, IFRS / US GAAP financial reporting and virtual CFO services for businesses in Pakistan, the USA, Australia and worldwide — on QuickBooks, Xero and MYOB."
                path="/accounting"
            />
            <main>
                <PageHero
                    eyebrow="Accounting & Bookkeeping"
                    title="Accounting that keeps your business in control"
                    subtitle="From cloud bookkeeping and payroll to IFRS / US GAAP reporting and virtual CFO advisory — Volvexer gives businesses worldwide clean books and clear numbers, every month."
                    ctaMessage="Hi Volvexer, I'm interested in your accounting & bookkeeping services."
                />

                <section className="section" id="service-list">
                    <div className="container">
                        <div className="section-head">
                            <span className="section-head__eyebrow">What’s included</span>
                            <h2 className="section-head__title">Full-service accounting</h2>
                            <p className="section-head__sub">Everything you need to keep your finances accurate, compliant and decision-ready.</p>
                        </div>
                        <div className="cards-grid">
                            {ACCOUNTING_SERVICES.map((s) => (
                                <article className="info-card" key={s.title}>
                                    <div className="info-card__icon"><i className={`fas ${s.icon}`} aria-hidden="true"></i></div>
                                    <h3>{s.title}</h3>
                                    <p>{s.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section section--alt">
                    <div className="container">
                        <div className="section-head">
                            <span className="section-head__eyebrow">How it works</span>
                            <h2 className="section-head__title">Getting started is simple</h2>
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

                <ToolsSection />
                <WhyChooseUs />
                <CtaBand />
                <ContactSection />
            </main>
        </>
    );
}

export default AccountingPage;
