import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        const elements = document.querySelectorAll('.fade-in, .fade-in-up');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};

export default useScrollAnimation;
