'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after the element is visible to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
