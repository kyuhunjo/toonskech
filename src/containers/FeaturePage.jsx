import React from 'react';

import FeatureItem from '../components/FeatureItem'; // Import FeatureItem component

import '../styles/pages/FeaturePage.css'; // Import the CSS for FeaturesPage

const FeaturesPage = () => {
    // Define your features, demos, plan comparisons, etc., here

    return (
        <div>

            <main className="features-content">
                <section className="detailed-features">
                    <h1>Explore Our Features</h1>
                    {/* Map through your features data and render FeatureItems */}
                </section>

                <section className="interactive-demos">
                    <h1>Interactive Demos</h1>
                    {/* Insert interactive demos here */}
                </section>

                <section className="comparison-chart">
                    <h1>Choose Your Plan</h1>
                    {/* Insert plan comparison chart here */}
                </section>
            </main>

        </div>
    );
};

export default FeaturesPage;
