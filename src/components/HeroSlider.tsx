import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Banner } from '../types';
import { useBanners } from '../hooks/useBanners';

interface HeroSliderProps {
  onShopClick?: () => void;
  onServicesClick?: () => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ onShopClick, onServicesClick }) => {
  const { banners, loading } = useBanners();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, banners.length]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + banners.length) % banners.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (loading) {
    return (
      <section className="relative bg-gradient-to-br from-battery-background to-battery-background-dark pt-12 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-6"></div>
              <div className="h-16 bg-gray-300 rounded w-96 mx-auto mb-6"></div>
              <div className="h-6 bg-gray-300 rounded w-80 mx-auto mb-8"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (banners.length === 0) {
    return (
      <section className="relative bg-gradient-to-br from-battery-background to-battery-background-dark pt-12 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-battery-text mb-6">
              No Banners Available
            </h1>
            <p className="text-xl text-battery-text-light mb-8">
              Please add banners from the admin dashboard.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentBanner = banners[currentSlide];

  return (
    <section className="relative overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-[600px] md:h-[700px]">
        {/* Background Image/Color */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
          style={{
            backgroundImage: currentBanner.background_image_url 
              ? `url(${currentBanner.background_image_url})` 
              : undefined,
            backgroundColor: currentBanner.background_color,
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-center">
              {/* Subtitle */}
              {currentBanner.subtitle && (
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-slide-down">
                  <span>{currentBanner.subtitle}</span>
                </div>
              )}
              
              {/* Title */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 animate-fade-in"
                style={{ color: currentBanner.text_color }}
              >
                {currentBanner.title}
              </h1>
              
              {/* Description */}
              {currentBanner.description && (
                <p 
                  className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slide-up"
                  style={{ color: currentBanner.text_color, opacity: 0.9 }}
                >
                  {currentBanner.description}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  onClick={onShopClick}
                  className="btn-industrial flex items-center justify-center space-x-2 group"
                >
                  <span>{currentBanner.button_text}</span>
                </button>
                <button 
                  onClick={onServicesClick}
                  className="btn-industrial-secondary"
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {banners.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
              disabled={isTransitioning}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Play/Pause Button */}
        {banners.length > 1 && (
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
        )}

        {/* Dots Indicator */}
        {banners.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}
      </div>

      {/* Delivery Areas Section */}
      <div className="bg-gradient-to-br from-battery-background to-battery-background-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-battery-text mb-4 text-center">We Cater to These Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-100 rounded-xl">
                <div className="text-2xl mb-2">🏙️</div>
                <h4 className="font-semibold text-green-800">CDO City</h4>
                <p className="text-sm text-green-600 font-bold">FREE DELIVERY</p>
                <p className="text-xs text-green-500">30 minutes</p>
              </div>
              <div className="text-center p-4 bg-blue-100 rounded-xl">
                <div className="text-2xl mb-2">🏘️</div>
                <h4 className="font-semibold text-blue-800">MisOr</h4>
                <p className="text-sm text-blue-600">+₱200 Delivery</p>
                <p className="text-xs text-blue-500">1-4 hours (Same Day)</p>
              </div>
              <div className="text-center p-4 bg-purple-100 rounded-xl">
                <div className="text-2xl mb-2">🌄</div>
                <h4 className="font-semibold text-purple-800">Dito Areas</h4>
                <p className="text-sm text-purple-600">+₱300 Delivery</p>
                <p className="text-xs text-purple-500">2-3 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gradient-to-br from-battery-background to-battery-background-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-battery-primary mb-2">50K+</div>
              <div className="text-battery-text-light text-sm">Batteries Sold</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-battery-primary mb-2">99.8%</div>
              <div className="text-battery-text-light text-sm">Customer Satisfaction</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-battery-primary mb-2">24/7</div>
              <div className="text-battery-text-light text-sm">Expert Support</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-battery-primary mb-2">30 Mins</div>
              <div className="text-battery-text-light text-sm">Fast Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
