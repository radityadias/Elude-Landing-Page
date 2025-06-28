// src/hooks/useIntersectionObserver.js
import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If the element is intersecting (at least partially visible)
                // and has not been marked visible yet, set it to true.
                // Or if it's not intersecting and was visible, set to false.
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Optional: If you want the animation to reset when scrolling away
                    // setIsVisible(false);
                }
            });
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]); // Re-run effect if options change

    return [elementRef, isVisible];
};

export default useIntersectionObserver;