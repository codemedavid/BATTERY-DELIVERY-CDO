import React from 'react';
import { 
  Battery, 
  Clock, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-battery-text text-battery-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Info */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-battery-primary to-battery-primary-dark rounded-lg flex items-center justify-center ring-2 ring-battery-accent">
                <Battery className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-poppins font-bold">BATTERY DELIVERY CDO</h3>
                <p className="text-sm text-battery-secondary-light">Reliable Power Solutions</p>
              </div>
            </div>
            <p className="text-battery-secondary-light mb-6 leading-relaxed max-w-2xl mx-auto">
              Your trusted source for premium automotive batteries. We provide reliable power solutions 
              for all vehicle types with industry-leading warranties and expert support.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center space-x-3 text-battery-secondary-light">
                <Phone className="h-4 w-4 text-battery-accent" />
                <span className="text-sm">+63 88 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-battery-secondary-light">
                <Mail className="h-4 w-4 text-battery-accent" />
                <span className="text-sm">support@batterydeliverycdo.com</span>
              </div>
              <div className="flex items-center space-x-3 text-battery-secondary-light">
                <MapPin className="h-4 w-4 text-battery-accent" />
                <span className="text-sm">Cagayan de Oro City, Philippines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-battery-secondary-dark mt-12" />

        {/* Social Media */}
        <div className="border-t border-battery-secondary-dark pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-battery-secondary-light text-sm">Follow Us:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-battery-white/10 rounded-lg flex items-center justify-center hover:bg-battery-accent hover:text-battery-text transition-all duration-200 group"
                  >
                    <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-battery-secondary-light text-sm">
              © {currentYear} BATTERY DELIVERY CDO. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-battery-primary border-t border-battery-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-battery-secondary-light">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-2 md:mb-0">
              <a href="#privacy" className="hover:text-battery-accent transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-battery-accent transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-battery-accent transition-colors">Cookie Policy</a>
              <a href="#accessibility" className="hover:text-battery-accent transition-colors">Accessibility</a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-battery-accent" />
              <span>Mon-Fri: 8AM-6PM EST | Sat: 9AM-4PM EST</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
