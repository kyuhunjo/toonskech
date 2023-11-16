import React from 'react';
import VideoTutorial from '../components/VideoTutorial';
import '../styles/pages/LearningCenterPage.css';

const LearningCenterPage = () => {
    // Example video tutorials data
    const videoTutorials = [
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/example1",
            title: "Getting Started with Webtoon Sketch",
            description: "Learn the basics of using Webtoon Sketch to create your first webtoon."
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/example2",
            title: "Advanced Techniques",
            description: "Improve your skills with these advanced techniques."
        },
        // Add more video tutorials as needed
    ];

    return (
        <div>
            <main className="learning-center">
                <section id="searchable-guides">
                    <h2>Searchable Guides</h2>
                    <input type="search" id="guide-search" name="guide-search" placeholder="Search tutorials..." />
                    <div className="guides-list">
                        {/* List your guides here */}
                    </div>
                </section>

                <section id="video-tutorials">
                    <h2>Video Tutorials</h2>
                    <div className="video-tutorials-container">
                        {videoTutorials.map((tutorial) => (
                            <VideoTutorial 
                                key={tutorial.id}
                                videoUrl={tutorial.videoUrl}
                                title={tutorial.title}
                                description={tutorial.description}
                            />
                        ))}
                    </div>
                </section>

                <section id="user-forum">
                    <h2>User Forum</h2>
                    <p>Join the community discussion in our user forum. Share tips, ask questions, and connect with other webtoon creators.</p>
                    {/* Link to forum or forum content */}
                </section>
            </main>
        </div>
    );
};

export default LearningCenterPage;
