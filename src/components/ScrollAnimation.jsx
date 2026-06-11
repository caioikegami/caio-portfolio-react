import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimation = ({
    children,
    animation = 'fade-in',
    delay = 0,
    once = true,
    threshold = 0.1
}) => {
    const [ref, isVisible] = useScrollAnimation({ once, threshold });

    const delayClass = delay > 0 ? `delay-${delay}` : '';

    return (
        <div
            ref={ref}
            className={`${animation} ${isVisible ? 'visible' : ''} ${delayClass}`}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;