import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: `${import.meta.env.BASE_URL}` },
        { name: 'About', href: `${import.meta.env.BASE_URL}#about` },
        { name: 'Galery', href: `${import.meta.env.BASE_URL}#gallery` },
        { name: 'Rooms', href: `${import.meta.env.BASE_URL}#rooms` },
        { name: 'Location', href: `${import.meta.env.BASE_URL}#location` },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: isScrolled ? '1rem 0' : '1.5rem 0',
            color: isScrolled ? 'var(--color-text)' : 'white'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <a href={import.meta.env.BASE_URL} style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', textDecoration: 'none', color: 'inherit' }}>
                    Dancing Mountain
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontWeight: 500,
                                position: 'relative',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/085156090617"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            padding: '8px 20px',
                            fontSize: '0.9rem'
                        }}
                    >
                        Book a Room
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={toggleMobileMenu}
                    style={{
                        display: 'none',
                        background: 'none',
                        color: 'inherit',
                        fontSize: '1.5rem'
                    }}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'var(--color-bg)',
                    padding: '1rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    color: 'var(--color-text)'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ fontWeight: 500, textDecoration: 'none', color: 'inherit' }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ textAlign: 'center' }}
                    >
                        Book a Room
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
