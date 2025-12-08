import React from 'react';

const features = [
    { title: 'Udara Sejuk', desc: 'Nikmati kesegaran udara pegunungan yang alami.', icon: '🏔️' },
    { title: 'Arsitektur Bambu', desc: 'Desain unik yang menyatu dengan alam sekitar.', icon: '🎋' },
    { title: 'Panorama Alam', desc: 'Pemandangan hutan dan gunung yang memukau.', icon: '🌄' },
    { title: 'Eco Retreat', desc: 'Pengalaman menginap yang ramah lingkungan.', icon: '🌿' }
];

const Features = () => {
    return (
        <section id="features" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h2 className="fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--color-primary)' }}>
                    Fasilitas Unggulan
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} className="fade-in-up" style={{
                            textAlign: 'center',
                            padding: 'var(--spacing-lg)',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            transitionDelay: `${index * 0.1}s`
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>{feature.icon}</div>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.25rem' }}>{feature.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
