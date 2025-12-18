import React from 'react';

const About = () => {
    return (
        <section id="about" className="section container">
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--spacing-xl)',
                alignItems: 'center'
            }}>
                <div className="text-content fade-in-up">
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)', fontSize: '2.5rem' }}>Harmoni Alam & Arsitektur</h2>
                    <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                        Dancing Mountain Villa terinspirasi dari konsep hunian bambu yang sederhana namun mendunia.
                        Struktur villa memadukan bambu, batu, dan material lokal agar menyatu dengan lanskap pegunungan.
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                        Atap tinggi dan ventilasi alami menciptakan suasana sejuk khas dataran tinggi.
                        Interior mengusung konsep ruang terbuka tanpa sekat besar, sehingga cahaya alami mengalir
                        dan pemandangan hutan dapat terlihat dari berbagai sudut.
                    </p>
                </div>
                <div className="image-content fade-in-up stagger-1" style={{
                    height: '400px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={`${import.meta.env.BASE_URL}gallery-2.jpg`}
                        alt="Interior Dancing Mountain Villa"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
