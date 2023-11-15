import React from 'react';
import FeatureItem from '../components/FeatureItem';
import TestimonialItem from '../components/TestimonialItem';
import '../styles/pages/HomePage.css';

const HomePage = () => {
    // Placeholder data for features
    const features = [
        {
            id: 1,
            title: "자동 스케치",
            description: "귀하의 스타일에 맞춰 조정되는 AI 기반 도구를 사용하여 스케치를 만드십시오.",
            icon: "images/icon1.png"
        },
        {
            id: 2,
            title: "편집실",
            description: "당사의 포괄적인 편집 제품군을 사용하여 웹툰을 정밀하게 편집하세요.",
            icon: "images/icon2.png"
        },
        // Add more features as needed
    ];

    // Placeholder data for testimonials
    const testimonials = [
        {
            id: 1,
            quote: "This is an amazing tool!",
            author: "User 1"
        },
        {
            id: 2,
            quote: "I love using this for my projects.",
            author: "User 2"
        },
        // Add more testimonials as needed
    ];

    return (
        <div>
            <header className="hero">
            <div className="hero-content">
                <h1 className="hero-heading">웹툰 스케치로 창의력을 발휘해보세요</h1>
                <p className="hero-subheading">웹툰 예술성을 위한 디지털 캔버스.</p>
                <button id="signUp" className="primary-button">무료로 시작해보세요</button>
            </div>
            </header>

            <main>
                <section id="features" className="features">
                    <h2>놀라운 기능</h2>
                    <div className="feature-list">
                        {features.map(feature => (
                            <FeatureItem key={feature.id} title={feature.title} description={feature.description} icon={feature.icon} />
                        ))}
                    </div>
                </section>

                <section id="testimonials" className="testimonials">
                    <h2>크리에이터 스토리</h2>
                    <div className="testimonial-list">
                        {testimonials.map(testimonial => (
                            <TestimonialItem key={testimonial.id} quote={testimonial.quote} author={testimonial.author} />
                        ))}
                     </div>
                </section>

                {/* Additional sections */}
            </main>
        </div>
    );
};

export default HomePage;
