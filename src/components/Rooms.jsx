import React from 'react';
import { Link } from 'react-router-dom';

import { rooms } from '../data/rooms';

const Rooms = () => {
    return (
        <section id="rooms" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h2 className="fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--color-primary)', fontSize: '2.5rem' }}>
                    Rooms
                </h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 'var(--spacing-lg)'
                }}>
                    {rooms.map((room, index) => (
                        <div key={room.id} className="fade-in-up card-hover" style={{
                            border: '1px solid #eee',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease',
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            transitionDelay: `${index * 0.1}s`,
                            flex: '1 1 300px',
                            maxWidth: '400px',
                            minWidth: '300px',
                        }}>
                            <div style={{
                                height: '250px',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={`${import.meta.env.BASE_URL}${room.image}`}
                                    alt={room.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: 'var(--spacing-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.5rem' }}>{room.name}</h3>
                                <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.1rem', lineHeight: '1.6', color: '#666', flex: 1 }}>{room.desc}</p>
                                <p style={{ fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: 'var(--spacing-md)', fontSize: '1.2rem' }}>
                                    {room.price}
                                </p>
                                <Link to={`/rooms/${room.id}`} className="btn" style={{ width: '100%', textAlign: 'center', display: 'block', textDecoration: 'none' }}>
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
