import React from 'react';

const About = () => {
    return (
        <section id="about" className="section container">
            <div className="about-grid">
                <div className="about-text fade-in-up">
                    <h2>Harmoni Alam & Arsitektur</h2>
                    <p>
                        Dancing Mountain Villa terinspirasi dari konsep hunian bambu yang sederhana namun mendunia.
                        Struktur villa memadukan bambu, batu, dan material lokal agar menyatu dengan lanskap pegunungan.
                    </p>
                    <p>
                        Atap tinggi dan ventilasi alami menciptakan suasana sejuk khas dataran tinggi.
                        Interior mengusung konsep ruang terbuka tanpa sekat besar, sehingga cahaya alami mengalir
                        dan pemandangan hutan dapat terlihat dari berbagai sudut.
                    </p>
                </div>
                <div className="about-image-wrapper fade-in-up stagger-1">
                    <img
                        src={`${import.meta.env.BASE_URL}gallery-2.jpg`}
                        alt="Interior Dancing Mountain Villa"
                        className="about-image"
                    />
                    {/* Gradient Overlay */}
                    <div className="about-overlay"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
