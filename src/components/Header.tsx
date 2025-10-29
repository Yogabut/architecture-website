import React, { useState, useEffect } from 'react';
import header from '@/lib/header';


const HeaderSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            // Fade out
            setOpacity(0);
            setIsAnimating(false);
            
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % header.length);
                // Fade in
                setTimeout(() => {
                    setOpacity(1);
                    setIsAnimating(true);
                }, 50);
            }, 800);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const currentSlide = header[currentIndex];

    return (
        <section id='header'>
            <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image dengan Zoom Effect */}
            <div 
                className={`absolute inset-0 transition-all duration-[6000ms] ease-out ${
                    isAnimating ? 'scale-110' : 'scale-100'
                }`}
                style={{
                    backgroundImage: `url(${currentSlide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    willChange: 'transform',
                    opacity: opacity,
                    transition: 'transform 6000ms ease-out, opacity 800ms ease-in-out',
                }}
            >
                {/* Overlay Gradient */}
                <div 
                    className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
                    style={{
                        opacity: opacity,
                        transition: 'opacity 800ms ease-in-out',
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        className="max-w-3xl"
                        style={{
                            opacity: opacity,
                            transition: 'opacity 800ms ease-in-out',
                        }}
                    >
                        {/* Title dengan Fade In Animation */}
                        <h1 
                            key={`title-${currentSlide.id}`}
                            className="mb-4 text-5xl font-bold text-white sm:text-6xl lg:text-7xl animate-[fadeInUp_0.8s_ease-out]"
                        >
                            {currentSlide.title}
                        </h1>
                        
                        {/* Subtitle */}
                        <h2 
                            key={`subtitle-${currentSlide.id}`}
                            className="mb-6 text-2xl text-gray-200 sm:text-3xl lg:text-4xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                        >
                            {currentSlide.Subtitle}
                        </h2>
                        
                        {/* Description */}
                        <p 
                            key={`desc-${currentSlide.id}`}
                            className="mb-8 text-lg leading-relaxed text-gray-300 sm:text-xl animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                        >
                            {currentSlide.description}
                        </p>
                    </div>
                </div>
            </div>

             {/* Scroll Indicator */}
            <div 
                data-aos="fade-up"
                data-aos-delay="1100"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center pt-2">
                <div className="w-1 h-3 bg-gold rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Inline Keyframes */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
            </div>
        </section>
    );
};

export default HeaderSection;