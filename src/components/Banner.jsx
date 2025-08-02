import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaHeart, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import banner1 from '../assets/Banner1.jpeg';
import banner2 from '../assets/Banner2.jpeg';
import banner3 from '../assets/Banner3.jpeg';
import banner4 from '../assets/Banner4.jpeg';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: banner1,
            title: "Bring Warmth to Those in Need",
            subtitle: "Your donation can make the difference between cold and comfort",
            buttonText: "Donate Now",
            buttonLink: "/donation-campaigns"
        },
        {
            id: 2,
            image: banner2,
            title: "Join Our Winter Mission",
            subtitle: "Together we can ensure no one faces winter without warmth",
            buttonText: "Get Involved",
            buttonLink: "/how-to-help"
        },
        {
            id: 3,
            image: banner3,
            title: "Every Coat Tells a Story",
            subtitle: "Help us write stories of hope and compassion this winter",
            buttonText: "View Impact",
            buttonLink: "/about"
        },
        {
            id: 4,
            image: banner4,
            title: "Volunteer with WinterAid",
            subtitle: "Be the helping hand that brings warmth to our community",
            buttonText: "Volunteer",
            buttonLink: "/how-to-help"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden">
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                    >
                        {/* Background Image */}
                        <div
                            className="w-full h-full bg-cover bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex items-center">
                                <div className="max-w-screen-xl mx-auto px-4 lg:px-0 w-full">
                                    <div className="max-w-2xl text-white">
                                        <div className="mb-6">
                                            <div className="inline-flex items-center bg-Orange/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                                                <FaHeart className="text-Orange mr-2" />
                                                <span className="text-sm font-medium text-white">WinterAid Campaign</span>
                                            </div>
                                        </div>

                                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                                            {slide.title}
                                        </h1>

                                        <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                            {slide.subtitle}
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                            <Link
                                                to={slide.buttonLink}
                                                className="inline-flex items-center justify-center bg-gradient-to-r from-Orange to-lightOrange text-white px-8 py-4 rounded-full font-semibold hover:from-lightOrange hover:to-Orange transform hover:scale-105 transition-all duration-300 shadow-lg"
                                            >
                                                <FaHandsHelping className="mr-2" />
                                                {slide.buttonText}
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    const aboutSection = document.getElementById('about-section');
                                                    if (aboutSection) {
                                                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }}
                                                className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 group"
            >
                <FaChevronLeft className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 group"
            >
                <FaChevronRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-Orange scale-125'
                            : 'bg-white/50 hover:bg-white/70'
                            }`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div
                    className="h-full bg-gradient-to-r from-Orange to-lightOrange transition-all duration-5000 ease-linear"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`
                    }}
                />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-10 text-6xl text-white/10 animate-pulse hidden lg:block">❄️</div>
            <div className="absolute bottom-20 left-10 text-4xl text-white/10 animate-bounce hidden lg:block">🧥</div>
        </div>
    );
};

export default Banner;
