import React from 'react';

const Hero = () => {
    return (
        <section className="hero" style={{
            height: '100vh',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/hero-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white'
        }}>
            <div className="container fade-in-up">
                <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Dancing Mountain Villa
                </h1>
                <p style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-lg)', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    Experience Serenity in Nature's Embrace
                </p>
                <a href="#rooms" className="btn" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
                    Explore Our Rooms
                </a>
            </div>
        </section>
    );
};

export default Hero;
