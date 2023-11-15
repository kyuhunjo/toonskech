import React from 'react';

import '../styles/pages/PrivacyTermsPage.css'; // Import the CSS for PrivacyTermsPage

const PrivacyTermsPage = () => {
    return (
        <div>

            <main className="legal-content">
                <section id="privacy-policy" className="privacy-policy">
                    <h2>Privacy Policy</h2>
                    <p>This privacy policy explains how we handle your personal information and data. We value your trust, so we’ve strived to present this policy in clear, plain language instead of legal terms where possible.</p>
                    {/* Insert your privacy policy content here */}
                </section>

                <section id="terms-of-use" className="terms-of-use">
                    <h2>Terms of Use</h2>
                    <p>The following terms and conditions govern all use of the Webtoon Sketching Tool website and all content, services, and products available at or through the website.</p>
                    {/* Insert your terms of use content here */}
                </section>
            </main>

            
        </div>
    );
};

export default PrivacyTermsPage;
