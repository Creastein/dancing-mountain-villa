import React from 'react';
import { Link } from 'react-router-dom';
import { rooms } from '../data/rooms';

const Rooms = () => {
    return (
        <section id="rooms" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h2 className="fade-in-up rooms-title">
                    Rooms
                </h2>
                <div className="rooms-grid">
                    {rooms.map((room, index) => (
                        <div key={room.id} className="fade-in-up card-hover room-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="room-image-wrapper">
                                <img
                                    src={`${import.meta.env.BASE_URL}${room.image}`}
                                    alt={room.name}
                                    className="room-image"
                                />
                            </div>
                            <div className="room-content">
                                <h3 className="room-name">{room.name}</h3>
                                <p className="room-desc">{room.desc}</p>
                                <p className="room-price">
                                    {room.price}
                                </p>
                                <Link to={`/rooms/${room.id}`} className="btn room-btn">
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
