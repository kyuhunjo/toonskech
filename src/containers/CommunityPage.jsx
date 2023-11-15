import React from 'react';
import GalleryItem from '../components/GalleryItem';
import '../styles/pages/CommunityPage.css';

const CommunityPage = () => {
    // Example gallery items data
    const galleryItems = [
        {
            id: 'artwork1',
            imageUrl: '/images/artwork1.png', // Update with correct path
            altText: 'Artwork 1',
            caption: 'Artist 1'
        },
        {
            id: 'artwork2',
            imageUrl: '/images/artwork2.png', // Update with correct path
            altText: 'Artwork 2',
            caption: 'Artist 2'
        },
        // ... more gallery items
    ];

    // ... rest of the data for forum links and events

    return (
        <div>
            <main className="community-content">
                <section id="user-gallery" className="user-gallery">
                    <h2>User Gallery</h2>
                    <div className="gallery-grid">
                        {galleryItems.map(item => (
                            <GalleryItem 
                                key={item.id}
                                imageUrl={item.imageUrl}
                                altText={item.altText}
                                caption={item.caption}
                            />
                        ))}
                    </div>
                </section>

                <section id="forum-board" className="forum-board">
                    <h2>Forum Board</h2>
                    <div className="forum-links">
                        {/* List your forum categories and links here */}
                    </div>
                </section>

                <section id="event-calendar" className="event-calendar">
                    <h2>Event Calendar</h2>
                    <ul className="event-list">
                        {/* List your upcoming events here */}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default CommunityPage;
