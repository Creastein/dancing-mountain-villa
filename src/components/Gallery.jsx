import React from 'react';

const galleryImages = [
    'gallery-1.jpg',
    'gallery-2.jpg',
    'gallery-3.jpg',
    'gallery-4.jpg',
    'gallery-5.jpg',
    'gallery-6.jpg'
];

const Gallery = () => {
    return (
        <section id="gallery" className="section">
            <div className="container">
                <h2 className="fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--color-primary)', fontSize: '2.5rem' }}>
                    Gallery
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {galleryImages.map((image, index) => (
                        <div key={index} className="fade-in-up card-hover" style={{
                            height: '250px',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transitionDelay: `${index * 0.05}s`
                        }}>
                            <img
                                src={`${import.meta.env.BASE_URL}${image}`}
                                alt={`Gallery ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
