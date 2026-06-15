import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import SEO from './components/SEO';
import HomeHero from './components/HomeHero';
import ServicesSection from './components/ServicesSection';
import RegionsSection from './components/RegionsSection';
import ToolsSection from './components/ToolsSection';
import AutomationSection from './components/AutomationSection';
import WhyChooseUs from './components/WhyChooseUs';
import TeamSection from './components/TeamSection';
import TaxCalculator from './components/TaxCalculator';
import FaqSection from './components/FaqSection';
import CtaBand from './components/CtaBand';
import ContactSection from './components/ContactSection';
import AccountingPage from './components/AccountingPage';
import TaxationPage from './components/TaxationPage';
import './styles.css';

// Scroll to top on route change, or to the hash target if present.
function ScrollManager() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const el = document.getElementById(hash.replace('#', ''));
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        window.scrollTo({ top: 0 });
    }, [pathname, hash]);
    return null;
}

function HomePage() {
    return (
        <>
            <SEO
                title="Volvexer | International Tax Filing, Accounting & Bookkeeping"
                description="Volvexer provides tax filing, accounting and bookkeeping for individuals and businesses in Pakistan, the USA, Australia, the UK and worldwide — across FBR, IRS, ATO and HMRC."
                path="/"
            />
            <main>
                <HomeHero />
                <ServicesSection />
                <RegionsSection />
                <ToolsSection />
                <AutomationSection />
                <WhyChooseUs />
                <TaxCalculator />
                <TeamSection />
                <FaqSection />
                <CtaBand />
                <ContactSection />
            </main>
        </>
    );
}

function App() {
    return (
        <Router>
            <ScrollManager />
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/taxation" element={<TaxationPage />} />
                    <Route path="/accounting" element={<AccountingPage />} />
                </Routes>
                <Footer />
                <WhatsAppFloat />
            </div>
        </Router>
    );
}

export default App;
