import React from 'react';

const Location = () => {
    return (
        <section id="location" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)', fontSize: '2.5rem' }}>Our Location</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666', fontSize: '1.2rem', lineHeight: '1.6' }}>
                        Tersembunyi di lereng gunung yang tenang, namun mudah diakses. Temukan kedamaian Anda di Dancing Mountain Villa.
                    </p>
                </div>

                <div className="fade-in-up stagger-1" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    alignItems: 'center'
                }}>
                    {/* Map Container */}
                    <div style={{
                        height: '400px',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        <iframe
                            /* 
                                NOTE: The link below is a placeholder. 
                                To get your real map:
                                1. Go to Google Maps.
                                2. Search for your location.
                                3. Click "Share" -> "Embed a map".
                                4. Copy the link inside src="..." (it starts with https://www.google.com/maps/embed?pb=...)
                            */
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15827.83311952062!2d110.4937824!3d-7.3585736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a79bf13e042c3%3A0x89fbbd7f25d5a10a!2sDancing%20Mountain%20House%20%2F%20Rumah%20Bambu!5e0!3m2!1sid!2sid!4v1764997801537!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Dancing Mountain Villa Location"
                        ></iframe>
                    </div>

                    {/* Address Details */}
                    <div style={{ padding: 'var(--spacing-lg)' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)', fontSize: '1.8rem' }}>Visit Us</h3>
                        <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                            <strong>Dancing Mountain Villa</strong><br />
                            Jl. Flamboyan, Tegalrejo, Kec. Argomulyo, <br />
                            Kota Salatiga,<br />
                            Jawa Tengah, Indonesia
                        </p>

                        <div style={{ marginTop: 'var(--spacing-lg)' }}>
                            <h4 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)', fontSize: '1.3rem' }}>Distance from Key Points</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>&#9992;</span> 55–70 mins from Ahmad Yani Airport (Semarang)
                                </li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>&#9992;</span> 60–80 mins from Adi Soemarmo Airport (Solo)
                                </li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>&#128642;</span> 55–75 mins from Semarang Tawang Station
                                </li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>&#128642;</span> 55–70 mins from Semarang Poncol Station
                                </li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>&#128739;</span> 25–30 mins from Salatiga Toll Exit
                                </li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>&#127961;</span> 30–35 mins from Salatiga City Center
                                </li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>&#127748;</span> 20–25 mins from Kopeng
                                </li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>&#128167;</span> 30–35 mins from Umbul Sidomukti
                                </li>
                            </ul>
                        </div>

                        <a href="https://maps.app.goo.gl/mZju5tzkWqhpv3f36" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: 'var(--spacing-md)' }}>
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
