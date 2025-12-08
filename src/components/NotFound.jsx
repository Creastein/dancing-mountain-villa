import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
            padding: 'var(--spacing-md)'
        }}>
            <h1 style={{ fontSize: '6rem', color: 'var(--color-secondary)', marginBottom: 'var(--spacing-sm)' }}>404</h1>
            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Page Not Found</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)', maxWidth: '400px', color: '#666' }}>
                Oops! The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link to="/" className="btn">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
