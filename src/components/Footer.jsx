import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '1.5rem 0',
            textAlign: 'center',
            fontSize: '0.9rem'
        }}>
            <div className="container fade-in-up">
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    {/* Instagram Icon */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    {/* Facebook Icon */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>
                </div>
                <p style={{ opacity: 0.8, letterSpacing: '1px' }}>
                    &copy; {new Date().getFullYear()} Dancing Mountain Villa. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
