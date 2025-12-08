import React from 'react';
import { Link } from 'react-router-dom';

export const rooms = [
    {
        id: 'bamboo-suite',
        name: 'Bamboo Suite',
        desc: 'Kamar luas dengan pemandangan lembah, dilengkapi balkon pribadi.',
        price: 'Start from IDR 1.500.000',
        details: 'Nikmati kenyamanan Bamboo Suite kami yang dirancang khusus untuk relaksasi maksimal. Dengan luas 45m2, suite ini menawarkan pemandangan lembah yang menakjubkan langsung dari tempat tidur Anda. Fasilitas termasuk King Size Bed, Bathtub semi-outdoor, dan sarapan untuk 2 orang.',
        images: ['Bamboo Suite 1', 'Bamboo Suite 2', 'Bamboo Suite 3'],
        specs: {
            size: '45m²',
            bed: '1 King Size Bed',
            capacity: '2 Adults',
            view: 'Valley View'
        },
        amenities: ['Free Wi-Fi', 'Breakfast Included', 'Private Balcony', 'Semi-outdoor Bathtub', 'AC', 'Mini Bar']
    },
    {
        id: 'stone-cottage',
        name: 'Stone Cottage',
        desc: 'Pondok privat dengan dinding batu alam dan taman rahasia.',
        price: 'Start from IDR 2.000.000',
        details: 'Stone Cottage menawarkan privasi mutlak dengan desain unik yang memadukan batu alam dan kayu. Dikelilingi oleh taman rahasia pribadi, cottage ini sempurna untuk pasangan yang mencari suasana romantis. Dilengkapi dengan Private Jacuzzi dan akses langsung ke kolam renang infinity.',
        images: ['Stone Cottage 1', 'Stone Cottage 2', 'Stone Cottage 3'],
        specs: {
            size: '50m²',
            bed: '1 Queen Size Bed',
            capacity: '2 Adults',
            view: 'Garden View'
        },
        amenities: ['Private Jacuzzi', 'Secret Garden', 'Direct Pool Access', 'Smart TV', 'Room Service', 'Coffee Maker']
    },
    {
        id: 'forest-cabin',
        name: 'Forest Cabin',
        desc: 'Kabin kayu di tengah hutan pinus untuk pengalaman menyatu dengan alam.',
        price: 'Start from IDR 1.200.000',
        details: 'Rasakan sensasi menginap di tengah hutan pinus yang sejuk di Forest Cabin. Kabin ini dibangun dengan material kayu daur ulang yang ramah lingkungan. Cocok untuk petualang dan pecinta alam. Fasilitas termasuk Hammock, Fire pit area, dan peralatan BBQ.',
        images: ['Forest Cabin 1', 'Forest Cabin 2', 'Forest Cabin 3'],
        specs: {
            size: '35m²',
            bed: '2 Single Beds',
            capacity: '2 Adults',
            view: 'Forest View'
        },
        amenities: ['Hammock', 'BBQ Grill', 'Fire Pit', 'Shared Bathroom', 'Eco-friendly Toiletries', 'Fan']
    },
    {
        id: 'river-villa',
        name: 'River Villa',
        desc: 'Villa eksklusif di tepi sungai dengan suara gemericik air yang menenangkan.',
        price: 'Start from IDR 2.500.000',
        details: 'River Villa adalah akomodasi termewah kami, terletak persis di tepi sungai yang jernih. Tidurlah ditemani suara gemericik air yang menenangkan. Villa ini memiliki 2 kamar tidur, ruang tamu luas, dapur pribadi, dan private pool yang menghadap ke sungai.',
        images: ['River Villa 1', 'River Villa 2', 'River Villa 3'],
        specs: {
            size: '80m²',
            bed: '2 Queen Size Beds',
            capacity: '4 Adults',
            view: 'River View'
        },
        amenities: ['Private Pool', 'Kitchen', 'Living Room', '2 Bedrooms', 'Bathtub', 'Netflix Included']
    }
];

const Rooms = () => {
    return (
        <section id="rooms" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 className="fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--color-primary)' }}>
                    Rooms
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {rooms.map((room, index) => (
                        <div key={room.id} className="fade-in-up card-hover" style={{
                            border: '1px solid #eee',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease',
                            backgroundColor: 'var(--color-bg)',
                            display: 'flex',
                            flexDirection: 'column',
                            transitionDelay: `${index * 0.1}s`
                        }}>
                            <div style={{
                                height: '200px',
                                backgroundColor: 'var(--color-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                {/* Placeholder for Room Image */}
                                <span>{room.name} Image</span>
                            </div>
                            <div style={{ padding: 'var(--spacing-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{room.name}</h3>
                                <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', flex: 1 }}>{room.desc}</p>
                                <p style={{ fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: 'var(--spacing-md)' }}>
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
