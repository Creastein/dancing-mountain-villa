import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { rooms } from './Rooms';

const RoomDetail = () => {
    const { id } = useParams();
    const room = rooms.find(r => r.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!room) {
        return (
            <div className="container" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                <h2>Room not found</h2>
                <Link to="/" className="btn">Back to Home</Link>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
    };

    return (
        <div className="room-detail" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#fff' }}>
            <div className="container">
                <Link to="/" style={{ display: 'inline-block', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary)', textDecoration: 'none' }}>
                    &larr; Back to Home
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'start' }}>
                    {/* Left Column: Image Carousel */}
                    <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', backgroundColor: '#f0f0f0' }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'var(--color-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '2rem',
                            transition: 'all 0.5s ease'
                        }}>
                            {room.images[currentImageIndex]}
                        </div>

                        {/* Carousel Controls */}
                        <button onClick={prevImage} style={{
                            position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.2rem'
                        }}>&#10094;</button>
                        <button onClick={nextImage} style={{
                            position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.2rem'
                        }}>&#10095;</button>

                        {/* Indicators */}
                        <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
                            {room.images.map((_, idx) => (
                                <div key={idx} style={{
                                    width: '8px', height: '8px', borderRadius: '50%',
                                    backgroundColor: idx === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                                    cursor: 'pointer'
                                }} onClick={() => setCurrentImageIndex(idx)} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div>
                        <h1 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)', fontSize: '2.5rem' }}>{room.name}</h1>
                        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: 'var(--spacing-lg)', lineHeight: '1.6' }}>
                            {room.details}
                        </p>

                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h4 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-secondary)' }}>Amenities</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                {room.amenities.map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555' }}>
                                        <span style={{ color: 'var(--color-accent)' }}>&#10003;</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginTop: 'var(--spacing-xl)' }}>
                            <a href={`https://wa.me/6281234567890?text=I'm interested in booking ${room.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ display: 'inline-block', padding: '12px 30px', fontSize: '1.1rem' }}>
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;
