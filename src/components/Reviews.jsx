import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// Sample review data - replace with actual Google Reviews data
const reviews = [
    {
        id: 1,
        name: 'Budi Santoso',
        rating: 5,
        comment: 'Tempat yang luar biasa! Arsitektur bambunya unik dan pemandangannya sangat indah. Sangat cocok untuk healing dari hiruk pikuk kota.',
        photo: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=27AE60&color=fff&size=80'
    },
    {
        id: 2,
        name: 'Siti Nurhaliza',
        rating: 5,
        comment: 'Pengalaman menginap yang tidak terlupakan. Udara sejuk, pemandangan gunung yang menakjubkan, dan pelayanan yang ramah. Highly recommended!',
        photo: 'https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=E67E22&color=fff&size=80'
    },
    {
        id: 3,
        name: 'Ahmad Rizki',
        rating: 5,
        comment: 'Perfect untuk family gathering! Anak-anak sangat senang bermain di alam terbuka. Villa yang eco-friendly dan nyaman.',
        photo: 'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=2C3E50&color=fff&size=80'
    },
    {
        id: 4,
        name: 'Dewi Lestari',
        rating: 4,
        comment: 'Suasana tenang dan damai. Cocok banget buat yang cari ketenangan. Kamar bersih dan nyaman. Pasti akan kembali lagi!',
        photo: 'https://ui-avatars.com/api/?name=Dewi+Lestari&background=27AE60&color=fff&size=80'
    },
    {
        id: 5,
        name: 'Eko Prasetyo',
        rating: 5,
        comment: 'Desain bambu yang sangat artistik! Foto-foto di sini hasilnya bagus semua. Tempat yang instagramable dan nyaman untuk staycation.',
        photo: 'https://ui-avatars.com/api/?name=Eko+Prasetyo&background=E67E22&color=fff&size=80'
    },
    {
        id: 6,
        name: 'Rina Wijaya',
        rating: 5,
        comment: 'Pelayanan sangat memuaskan, makanan enak, dan tempatnya bersih. Pemandangan sunrise dari balkon kamar sangat indah!',
        photo: 'https://ui-avatars.com/api/?name=Rina+Wijaya&background=2C3E50&color=fff&size=80'
    },
    {
        id: 7,
        name: 'Hendra Gunawan',
        rating: 5,
        comment: 'Tempat yang sempurna untuk retreat bersama tim. Suasana mendukung untuk brainstorming dan team building. Fasilitasnya lengkap!',
        photo: 'https://ui-avatars.com/api/?name=Hendra+Gunawan&background=27AE60&color=fff&size=80'
    },
    {
        id: 8,
        name: 'Maya Sari',
        rating: 4,
        comment: 'Lokasi strategis, tidak terlalu jauh dari kota tapi sudah terasa di pegunungan. Udara segar dan view yang bagus.',
        photo: 'https://ui-avatars.com/api/?name=Maya+Sari&background=E67E22&color=fff&size=80'
    }
];

const Reviews = () => {
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate reviews for seamless infinite scroll
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section id="reviews" className="section" style={{
            backgroundColor: 'var(--color-primary)',
            overflow: 'hidden',
            padding: 'var(--spacing-xl) 0'
        }}>
            <div className="container">
                <h2 className="fade-in-up" style={{
                    textAlign: 'center',
                    marginBottom: 'var(--spacing-xl)',
                    color: 'white',
                    fontSize: '2.5rem'
                }}>
                    Apa Kata Mereka
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.8)',
                    marginBottom: 'var(--spacing-xl)',
                    fontSize: '1.1rem'
                }}>
                    Pengalaman nyata dari tamu-tamu kami
                </p>
            </div>

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden'
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <style>
                    {`
                        @keyframes scroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        
                        .scroll-container {
                            display: flex;
                            gap: 1.5rem;
                            animation: scroll 40s linear infinite;
                        }
                        
                        .scroll-container.paused {
                            animation-play-state: paused;
                        }
                    `}
                </style>

                <div className={`scroll-container ${isPaused ? 'paused' : ''}`}>
                    {duplicatedReviews.map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            style={{
                                minWidth: '350px',
                                maxWidth: '350px',
                                backgroundColor: 'white',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--spacing-lg)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--spacing-md)'
                            }}
                        >
                            {/* Header with photo and name */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                                <img
                                    src={review.photo}
                                    alt={review.name}
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div>
                                    <h4 style={{
                                        fontSize: '1.1rem',
                                        marginBottom: '0.25rem',
                                        color: 'var(--color-primary)'
                                    }}>
                                        {review.name}
                                    </h4>
                                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                style={{
                                                    color: i < review.rating ? '#FFA500' : '#ddd',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Review comment */}
                            <p style={{
                                fontSize: '0.95rem',
                                color: '#666',
                                lineHeight: '1.6',
                                fontStyle: 'italic'
                            }}>
                                "{review.comment}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <p style={{
                textAlign: 'center',
                color: 'rgba(255,255,255,0.7)',
                marginTop: 'var(--spacing-lg)',
                fontSize: '0.9rem',
                fontStyle: 'italic'
            }}>
                💡 Hover untuk menghentikan scroll
            </p>
        </section>
    );
};

export default Reviews;
