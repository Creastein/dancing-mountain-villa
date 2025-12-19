import React from 'react';
import { FaWind, FaMountain, FaLeaf, FaUsers } from 'react-icons/fa';
import { GiBamboo } from 'react-icons/gi';

const features = [
    { title: 'Udara Sejuk', desc: 'Nikmati kesegaran udara pegunungan yang alami.', icon: <FaWind /> },
    { title: 'Arsitektur Bambu', desc: 'Desain unik yang menyatu dengan alam sekitar.', icon: <GiBamboo /> },
    { title: 'Panorama Alam', desc: 'Pemandangan hutan dan gunung yang memukau.', icon: <FaMountain /> },
    { title: 'Eco Retreat', desc: 'Pengalaman menginap yang ramah lingkungan.', icon: <FaLeaf /> },
    { title: 'Family Gathering', desc: 'Tempat sempurna untuk berkumpul bersama keluarga.', icon: <FaUsers /> }
];

const Features = () => {
    return (
        <section id="features" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h2 className="fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--color-primary)', fontSize: '2.5rem' }}>
                    Fasilitas Unggulan
                </h2>
                <div className="features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card fade-in-up" style={{
                            textAlign: 'center',
                            padding: 'var(--spacing-lg)',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            transitionDelay: `${index * 0.1}s`
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-accent)' }}>{feature.icon}</div>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.5rem' }}>{feature.title}</h3>
                            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
