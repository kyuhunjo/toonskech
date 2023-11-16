import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'; // Assuming you have a Navigation component
import Footer from './components/Footer'; // Assuming you have a Footer component

// Importing page components
import HomePage from './pages/HomePage';
import InformationPage from './pages/InformationPage';
import FeaturesPage from './pages/FeaturesPage';
import CommunityPage from './pages/CommunityPage';
import ToolInterfacePage from './pages/ToolInterfacePage';
import LearningCenterPage from './pages/LearningCenterPage';
import ContactSupportPage from './pages/ContactSupportPage';
import PrivacyTermsPage from './pages/PrivacyTermsPage';

// Global styles
import './styles/main.css';

function App() {
    return (
        <div>
            <Navigation />

            <Routes>
               <Route path="/" exact element={<HomePage />} />
               <Route path="/information" element={<InformationPage />} />
               <Route path="/features" element={<FeaturesPage />} />
               <Route path="/community" element={<CommunityPage />} />
               <Route path="/tool-interface" element={<ToolInterfacePage />} />
               <Route path="/learning-center" element={<LearningCenterPage />} />
               <Route path="/contact-support" element={<ContactSupportPage />} />
               <Route path="/privacy-terms" element={<PrivacyTermsPage />} />
               {/* Add more routes as needed */}
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
