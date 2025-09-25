import React from 'react';
import { Battery, Zap, Shield, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  onBatteryFinderClick?: () => void;
  onShopClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBatteryFinderClick, onShopClick }) => {
  const features = [
    { icon: Shield, text: "6 months - 1 year Warranty" },
    { icon: Clock, text: "Fast Delivery" },
    { icon: Zap, text: "Premium Quality" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-battery-background to-battery-background-dark pt-12 pb-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-battery-accent/10 text-battery-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-slide-down">
            <Battery className="h-4 w-4" />
            <span>Premium Automotive Batteries</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-battery-text mb-6 animate-fade-in">
            Reliable Batteries to
            <span className="block text-battery-primary mt-2">Keep You Moving</span>
          </h1>
          
        <p className="text-xl text-battery-text-light mb-8 max-w-3xl mx-auto animate-slide-up">
          ⚡ "Fast & Reliable Car Battery Delivery & Installation in CDO, MisOr & Dito Areas 🚗🔋 | 24/7 Service | Dead Battery? We're just a call away!"
        </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={onBatteryFinderClick}
              className="btn-industrial flex items-center justify-center space-x-2 group"
            >
              <span>Battery Finder</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onShopClick}
              className="btn-industrial-secondary"
            >
              Shop All Batteries
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-battery-text-light">
                <feature.icon className="h-5 w-5 text-battery-accent" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery Areas */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-battery-text mb-4 text-center">We Cater to These Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-100 rounded-xl">
              <div className="text-2xl mb-2">🏙️</div>
              <h4 className="font-semibold text-green-800">CDO City</h4>
              <p className="text-sm text-green-600 font-bold">FREE DELIVERY</p>
              <p className="text-xs text-green-500">Same Day</p>
            </div>
            <div className="text-center p-4 bg-blue-100 rounded-xl">
              <div className="text-2xl mb-2">🏘️</div>
              <h4 className="font-semibold text-blue-800">MisOr</h4>
              <p className="text-sm text-blue-600">+₱200 Delivery</p>
              <p className="text-xs text-blue-500">Next Day</p>
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

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-battery-secondary-light">
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
            <div className="text-3xl font-bold text-battery-primary mb-2">2-Day</div>
            <div className="text-battery-text-light text-sm">Fast Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;