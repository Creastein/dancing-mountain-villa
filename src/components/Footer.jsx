import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const handleNavClick = (e, href) => {
        e.preventDefault();
        // Jika hash berisi #, scroll ke elemen
        if (href.startsWith('#')) {
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '4rem 0 2rem',
            fontSize: '1rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {/* Column 1: Brand */}
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Dancing Mountain Villa
                        </h3>
                        <p style={{ opacity: 0.8, lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Hunian alami di punggung gunung dengan arsitektur bambu yang memukau.
                            Tempat sempurna untuk menemukan ketenangan.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://www.instagram.com/dancingmountainhouse_salatiga/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5rem', transition: 'opacity 0.3s' }} className="hover-opacity">
                                <FaInstagram />
                            </a>
                            <a href="https://wa.me/085156090617" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5rem', transition: 'opacity 0.3s' }} className="hover-opacity">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', borderBottom: '2px solid var(--color-secondary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#home" onClick={(e) => handleNavClick(e, '#home')} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s', cursor: 'pointer' }}>Home</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#about" onClick={(e) => handleNavClick(e, '#about')} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s', cursor: 'pointer' }}>About Us</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#rooms" onClick={(e) => handleNavClick(e, '#rooms')} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s', cursor: 'pointer' }}>Our Rooms</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s', cursor: 'pointer' }}>Gallery</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#location" onClick={(e) => handleNavClick(e, '#location')} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s', cursor: 'pointer' }}>Location</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s', cursor: 'pointer' }}>Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', borderBottom: '2px solid var(--color-secondary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                            Contact Us
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                <FaMapMarkerAlt style={{ marginTop: '5px', color: 'var(--color-secondary)' }} />
                                <span style={{ opacity: 0.8 }}>Jl. Flamboyan, Tegalrejo, Argomulyo, Salatiga, Jawa Tengah</span>
                            </li>
                            {/* Phone number removed as requested */}
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <FaWhatsapp style={{ color: 'var(--color-secondary)' }} />
                                <a href="https://wa.me/085156090617" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>
                                    Chat on WhatsApp
                                </a>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <FaEnvelope style={{ color: 'var(--color-secondary)' }} />
                                <span style={{ opacity: 0.8 }}>info@dancingmountain.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Dancing Mountain Villa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
