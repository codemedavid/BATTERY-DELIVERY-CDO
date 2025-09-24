/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        battery: {
          // Deep blue (trust, reliability)
          primary: '#1E3A8A',      // Deep blue
          'primary-dark': '#1E40AF', // Darker blue
          'primary-light': '#3B82F6', // Lighter blue
          
          // Metallic gray/silver (durability, automotive feel)
          secondary: '#6B7280',     // Metallic gray
          'secondary-dark': '#4B5563', // Darker gray
          'secondary-light': '#9CA3AF', // Lighter gray
          silver: '#C0C0C0',        // Pure silver
          
          // Yellow/orange accents (energy, power)
          accent: '#F59E0B',        // Orange
          'accent-light': '#FCD34D', // Light orange
          'accent-dark': '#D97706',  // Dark orange
          yellow: '#EAB308',        // Yellow
          
          // Backgrounds
          background: '#F8FAFC',    // Light gray background
          'background-dark': '#F1F5F9', // Slightly darker background
          white: '#FFFFFF',         // Pure white
          
          // Text colors
          text: '#1F2937',          // Dark gray text
          'text-light': '#6B7280',  // Light gray text
          'text-muted': '#9CA3AF'   // Muted text
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
        'lato': ['Lato', 'system-ui', 'sans-serif'],
        'sans': ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'hover-lift': 'hoverLift 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' }
        }
      }
    },
  },
  plugins: [],
};