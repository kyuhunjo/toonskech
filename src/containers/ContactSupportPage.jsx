import React from 'react';
import '../styles/pages/ContactSupportPage.css'; // Import the CSS for ContactSupportPage

const ContactSupportPage = () => {
    // Define methods to handle form submission, live chat, etc.

    return (
        <div>
            
            <main className="support-content">
                <section id="contact-form" className="contact-form">
                    <h2>Contact Us</h2>
                    <form action="#" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                        
                        <button type="submit" className="primary-button">Send Message</button>
                    </form>
                </section>
                
                <section id="faq" className="faq">
                    <h2>Frequently Asked Questions</h2>
                    {/* Insert FAQ items here */}
                </section>
                
                <section id="live-chat" className="live-chat">
                    <h2>Live Chat</h2>
                    <p>If you need help right away, start a live chat with one of our support agents.</p>
                    <button type="button" className="primary-button">Start Chat</button>
                </section>
            </main>

        </div>
    );
};

export default ContactSupportPage;