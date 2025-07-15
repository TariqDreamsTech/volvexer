import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';

function App() {
    return (
        <>
            <LoadingScreen />

            {/* Star Animation Background */}
            <div className="stars-container">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </div>

            <Navbar />
            <HeroSection />
            <ServicesOverview />
            <WhyChooseUs />
            <ContactSection />
        </>
    );
}

export default App; 