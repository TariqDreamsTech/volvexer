// Central source of truth for all shared business data.
export const CONTACT = {
    phone: '+923390625000',
    phoneDisplay: '+92 339 0625000',
    email: 'info@volvexer.site',
    whatsapp: 'https://wa.me/923390625000',
    domain: 'https://volvexer.site',
};

export const whatsappLink = (message) =>
    message
        ? `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
        : CONTACT.whatsapp;

export const STATS = [
    { number: '500+', label: 'Clients Served' },
    { number: '3+', label: 'Countries' },
    { number: '99%', label: 'Filing Accuracy' },
    { number: '24/7', label: 'Support' },
];

export const SERVICES = [
    {
        slug: 'taxation',
        icon: 'fa-file-invoice-dollar',
        title: 'Tax Filing & Taxation',
        tagline: 'Compliance across borders',
        description:
            'Income tax preparation and filing for individuals and businesses — FBR in Pakistan, IRS in the USA, ATO in Australia and HMRC in the UK. Stay compliant in every jurisdiction you operate in.',
        features: ['Multi-Country Filing', 'Tax Planning', 'Sales Tax / GST / VAT', 'Audit Support'],
    },
    {
        slug: 'accounting',
        icon: 'fa-book',
        title: 'Accounting & Bookkeeping',
        tagline: 'Books that always balance',
        description:
            'End-to-end financial management on QuickBooks, Xero and MYOB — from daily bookkeeping and payroll to IFRS / US GAAP financial statements and CFO-level advisory, wherever your business is based.',
        features: ['Cloud Bookkeeping', 'Payroll Processing', 'IFRS / GAAP Reporting', 'CFO Advisory'],
    },
];

// Regions / jurisdictions we serve.
export const REGIONS = [
    { flag: '🇵🇰', country: 'Pakistan', note: 'FBR income tax, sales tax & NTN' },
    { flag: '🇺🇸', country: 'United States', note: 'IRS filing, sales tax & US GAAP' },
    { flag: '🇦🇺', country: 'Australia', note: 'ATO returns, BAS & GST' },
    { flag: '🇬🇧', country: 'United Kingdom', note: 'HMRC Self Assessment & VAT' },
    { flag: '🇨🇦', country: 'Canada', note: 'CRA filing, GST/HST & payroll' },
    { flag: '🇦🇪', country: 'UAE', note: 'Corporate tax & VAT compliance' },
];

// Finance automation ideas we design & implement (led by our tech team).
export const AUTOMATIONS = [
    {
        icon: 'fa-file-invoice',
        title: 'Automated Invoicing & Reminders',
        text: 'Recurring invoices, auto-sent payment reminders and faster collections — no manual chasing.',
    },
    {
        icon: 'fa-building-columns',
        title: 'Bank Feed & Reconciliation',
        text: 'Live bank feeds that auto-categorise transactions and reconcile your books in real time.',
    },
    {
        icon: 'fa-robot',
        title: 'AI-Assisted Bookkeeping',
        text: 'Smart data capture from receipts and bills, with AI flagging anomalies before they cost you.',
    },
    {
        icon: 'fa-diagram-project',
        title: 'App Integrations & Workflows',
        text: 'Connect your tools with Zapier & Make — sales, payroll, CRM and accounting, all in sync.',
    },
    {
        icon: 'fa-chart-pie',
        title: 'Automated Reporting Dashboards',
        text: 'Real-time financial dashboards and scheduled reports delivered straight to your inbox.',
    },
    {
        icon: 'fa-bell',
        title: 'Tax & Deadline Automation',
        text: 'Never miss a filing — automated alerts and reminders for every tax and compliance deadline.',
    },
];

// Accounting platforms & tools we work with.
export const TOOLS = [
    { name: 'QuickBooks', icon: 'fa-q' },
    { name: 'Xero', icon: 'fa-x' },
    { name: 'MYOB', icon: 'fa-m' },
    { name: 'Wave', icon: 'fa-w' },
    { name: 'Zoho Books', icon: 'fa-z' },
    { name: 'Sage', icon: 'fa-s' },
    { name: 'NetSuite', icon: 'fa-n' },
    { name: 'Excel', icon: 'fa-file-excel' },
];

export const WHY_CHOOSE_US = [
    {
        icon: 'fa-shield-halved',
        title: 'Trusted & Secure',
        text: 'Your financial data is protected with enterprise-grade security and strict confidentiality.',
    },
    {
        icon: 'fa-user-tie',
        title: 'Certified Experts',
        text: 'Qualified tax consultants and accountants with years of hands-on FBR and audit experience.',
    },
    {
        icon: 'fa-bolt',
        title: 'Fast Turnaround',
        text: 'Quick, accurate filing and reporting — without compromising on compliance or quality.',
    },
    {
        icon: 'fa-headset',
        title: '24/7 Support',
        text: 'Round-the-clock support over WhatsApp, phone and email whenever you need answers.',
    },
];

export const TEAM = [
    {
        name: 'Asim Zubair',
        role: 'Founder',
        initials: 'AZ',
        bio: 'Leads Volvexer’s vision, building a trusted home for tax and accounting in Pakistan.',
        linkedin: 'https://www.linkedin.com/in/muhammad-asim-zubair/',
    },
    {
        name: 'Ahsan Tariq',
        role: 'Co-Founder · Tech & Automation Lead',
        initials: 'AT',
        bio: 'Leads all technology and automation at Volvexer — building the systems and workflows that make your accounting faster, smarter and error-free.',
        linkedin: 'https://www.linkedin.com/in/ahsan-tariq-comp-engr/',
    },
    {
        name: 'Wajiha Zubair',
        role: 'CMO',
        initials: 'WZ',
        bio: 'Heads marketing and brand, connecting Volvexer with the clients who need it most.',
        linkedin: null,
    },
];

export const FAQS = [
    {
        q: 'Which countries do you serve?',
        a: 'We support clients in Pakistan, the United States, Australia, the United Kingdom, Canada, the UAE and beyond — handling each jurisdiction’s tax authority, from FBR and IRS to ATO and HMRC.',
    },
    {
        q: 'Do you handle international and multi-jurisdiction tax?',
        a: 'Yes. Whether you are an expat, a freelancer with overseas income, or a company operating across borders, we manage filing, sales tax / GST / VAT and compliance in every region you work in.',
    },
    {
        q: 'Which accounting software do you work with?',
        a: 'We work on QuickBooks, Xero, MYOB, Wave, Zoho Books, Sage, NetSuite and Excel — or we can set up the right cloud system for your business from scratch.',
    },
    {
        q: 'Do you serve businesses as well as individuals?',
        a: 'Absolutely. We work with salaried individuals, freelancers, sole proprietors and registered companies for both taxation and accounting needs.',
    },
    {
        q: 'How do I get started?',
        a: 'Message us on WhatsApp or send an email. We’ll review your situation, share a clear quote, and guide you through every step.',
    },
];

// FBR salary tax slabs by year. Each slab: { min, max, rate, fixed }.
export const TAX_SLABS = {
    '2025-2026': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600000, max: 1200000, rate: 0.01, fixed: 0 },
        { min: 1200000, max: 2200000, rate: 0.11, fixed: 6000 },
        { min: 2200000, max: 3200000, rate: 0.23, fixed: 116000 },
        { min: 3200000, max: 4100000, rate: 0.3, fixed: 346000 },
        { min: 4100000, max: Infinity, rate: 0.35, fixed: 616000 },
    ],
    '2024-2025': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200000, max: 2200000, rate: 0.15, fixed: 30000 },
        { min: 2200000, max: 3200000, rate: 0.25, fixed: 180000 },
        { min: 3200000, max: 4100000, rate: 0.3, fixed: 430000 },
        { min: 4100000, max: Infinity, rate: 0.35, fixed: 700000 },
    ],
    '2023-2024': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
        { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
        { min: 2400000, max: 3600000, rate: 0.225, fixed: 165000 },
        { min: 3600000, max: 6000000, rate: 0.275, fixed: 435000 },
        { min: 6000000, max: Infinity, rate: 0.35, fixed: 1095000 },
    ],
    '2022-2023': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
        { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
        { min: 2400000, max: 3600000, rate: 0.2, fixed: 165000 },
        { min: 3600000, max: 6000000, rate: 0.25, fixed: 405000 },
        { min: 6000000, max: 12000000, rate: 0.325, fixed: 1005000 },
        { min: 12000000, max: Infinity, rate: 0.35, fixed: 2955000 },
    ],
    '2021-2022': [
        { min: 0, max: 600000, rate: 0, fixed: 0 },
        { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
        { min: 1200000, max: 1800000, rate: 0.1, fixed: 30000 },
        { min: 1800000, max: 2500000, rate: 0.15, fixed: 90000 },
        { min: 2500000, max: 3500000, rate: 0.175, fixed: 195000 },
        { min: 3500000, max: 5000000, rate: 0.2, fixed: 370000 },
        { min: 5000000, max: 8000000, rate: 0.225, fixed: 670000 },
        { min: 8000000, max: 12000000, rate: 0.25, fixed: 1345000 },
        { min: 12000000, max: 30000000, rate: 0.275, fixed: 2345000 },
        { min: 30000000, max: 50000000, rate: 0.3, fixed: 7295000 },
        { min: 50000000, max: 75000000, rate: 0.325, fixed: 13295000 },
        { min: 75000000, max: Infinity, rate: 0.35, fixed: 21420000 },
    ],
};

export const TAX_YEARS = Object.keys(TAX_SLABS);
