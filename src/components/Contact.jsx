import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)', fontSize: '2.5rem' }}>Hubungi Kami</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666', fontSize: '1.2rem', lineHeight: '1.6' }}>
                        Punya pertanyaan atau ingin reservasi? Jangan ragu untuk menghubungi kami melalui saluran di bawah ini.
                    </p>
                </div>

                <div className="fade-in-up" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* WhatsApp Card */}
                    <a href="https://wa.me/085156090617" target="_blank" rel="noopener noreferrer" className="card-hover" style={{
                        backgroundColor: 'white',
                        padding: 'var(--spacing-xl)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{ fontSize: '3rem', color: '#25D366' }}>
                            <FaWhatsapp />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>WhatsApp</h3>
                        <p style={{ fontSize: '1.1rem', color: '#666' }}>Chat langsung untuk respon cepat</p>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '1.2rem' }}>+62 851 5609 0617</span>
                    </a>

                    {/* Instagram Card */}
                    <a href="https://www.instagram.com/dancingmountainhouse_salatiga/" target="_blank" rel="noopener noreferrer" className="card-hover" style={{
                        backgroundColor: 'white',
                        padding: 'var(--spacing-xl)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{ fontSize: '3rem', color: '#E1306C' }}>
                            <FaInstagram />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Instagram</h3>
                        <p style={{ fontSize: '1.1rem', color: '#666' }}>Lihat update & galeri terbaru</p>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '1.1rem' }}>@dancingmountainhouse_salatiga</span>
                    </a>

                    {/* Email Card */}
                    <a href="mailto:info@dancingmountain.com" className="card-hover" style={{
                        backgroundColor: 'white',
                        padding: 'var(--spacing-xl)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>
                            <FaEnvelope />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Email</h3>
                        <p style={{ fontSize: '1.1rem', color: '#666' }}>Pertanyaan umum & kerjasama</p>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '1.1rem' }}>info@dancingmountain.com</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
